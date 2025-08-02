import tesloApi from '../../config/api/teslo-api'

export class ProductImagesActions {
  public static async prepareImages(images: string[]): Promise<string[]> {
    const fileImages = images.filter((image) => image.includes('file://'))
    const currentImages = images.filter((image) => !image.includes('file://'))

    if (fileImages.length > 0) {
      const uploadPromises = fileImages.map(ProductImagesActions.uploadImage)
      const uploadedImages = await Promise.all(uploadPromises)
      currentImages.push(...uploadedImages)
    }

    return currentImages.length > 0
      ? currentImages.map(
        (image) => image.split('/').pop() ? image : 'default-image.jpg'
      )
      : []
  }

  public static async uploadImage(image: string) {
    const formData = new FormData()

    formData.append('file', {
      uri: image,
      type: 'image/jpeg',
      name: image.split('/').pop() || 'image.jpg',
    })

    const { data } = await tesloApi.post<{ image: string }>('/files/product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return data.image
  }
}
