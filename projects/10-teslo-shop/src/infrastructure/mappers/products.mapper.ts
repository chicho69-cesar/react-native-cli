import { API_URL } from '../../config/api/teslo-api'
import { Gender, Product } from '../../domain/entities/product'
import { TesloProduct } from '../interfaces/teslo-products.responses'

export class ProductsMapper {
  public static toEntity(product: TesloProduct): Product {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      slug: product.slug,
      stock: product.stock,
      sizes: product.sizes,
      gender: product.gender,
      tags: product.tags,
      images: product.images.map(
        image => `${API_URL}/files/product/${image}`
      )
    }
  }

  public static empty(): Product {
    return {
      id: '',
      title: 'Nuevo producto',
      description: '',
      price: 0,
      images: [],
      slug: '',
      gender: Gender.Unisex,
      sizes: [],
      stock: 0,
      tags: [],
    }
  }
}
