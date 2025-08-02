import tesloApi from '../../config/api/teslo-api'
import { Product } from '../../domain/entities/product'
import { TesloProduct } from '../../infrastructure/interfaces/teslo-products.responses'
import { ProductsMapper } from '../../infrastructure/mappers/products.mapper'
import { ProductImagesActions } from './product-images'

export class ProductActions {
  public static async getProductsByPage(page: number, limit: number = 10): Promise<Product[]> {
    try {
      const { data } = await tesloApi.get<TesloProduct[]>(
        `/products?offset${page * 10}&limit=${limit}`
      )

      const products = data.map(ProductsMapper.toEntity)
      return products
    } catch (error) {
      console.error('Error fetching products:', error)
      throw new Error('Failed to fetch products')
    }
  }

  public static async getProductById(id: string): Promise<Product> {
    try {
      if (id === 'new') {
        return ProductsMapper.empty()
      }

      const { data } = await tesloApi.get<TesloProduct>(`/products/${id}`)
      const product = ProductsMapper.toEntity(data)
      return product
    } catch (error) {
      console.error('Error fetching product by ID:', error)
      throw new Error('Failed to fetch product by ID')
    }
  }

  public static async createUpdateProduct(product: Partial<Product>) {
    try {
      const stockToAdd = isNaN(Number(product.stock)) ? 0 : Number(product.stock)
      const priceToAdd = isNaN(Number(product.price)) ? 0 : Number(product.price)

      return product.id && product.id !== 'new'
        ? ProductActions.updateProduct({
          ...product,
          stock: stockToAdd,
          price: priceToAdd
        })
        : ProductActions.createProduct({
          ...product,
          stock: stockToAdd,
          price: priceToAdd
        })
    } catch (error) {
      console.error('Error creating or updating product:', error)
      throw new Error('Failed to create or update product')
    }
  }

  private static async createProduct(product: Partial<Product>) {
    try {
      const { id, images = [], ...rest } = product
      const checkedImages = await ProductImagesActions.prepareImages(images)

      const { data } = await tesloApi.post(`/products/`, {
        images: checkedImages,
        ...rest
      })

      return ProductsMapper.toEntity(data)
    } catch (error) {
      console.error('Error creating product:', error)
      throw new Error('Failed to create product')
    }
  }

  private static async updateProduct(product: Partial<Product>) {
    try {
      const { id, images = [], ...rest } = product
      const checkedImages = await ProductImagesActions.prepareImages(images)

      const { data } = await tesloApi.patch(`/products/${id}`, {
        images: checkedImages,
        ...rest
      })

      return ProductsMapper.toEntity(data)
    } catch (error) {
      console.error('Error updating product:', error)
      throw new Error('Failed to update product')
    }
  }
}
