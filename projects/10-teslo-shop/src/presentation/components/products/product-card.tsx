import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Card, Text } from '@ui-kitten/components'
import React from 'react'
import { Image } from 'react-native'
import { Product } from '../../../domain/entities/product'
import { RootStackParams } from '../../navigation/navigator'
import FadeInImage from '../ui/fade-in-image'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  return (
    <Card
      style={{ flex: 1, backgroundColor: '#F9F9F9', margin: 3 }}
      onPress={() => navigation.navigate('product', { productId: product.id })}
    >
      {(product.images.length === 0) ? (
        <Image
          source={require('../../../assets/no-product-image.png')}
          style={{ width: '100%', height: 200 }}
        />)
        : (
          <FadeInImage
            uri={product.images[0]}
            style={{ flex: 1, height: 200, width: '100%' }}
          />
        )}

      <Text
        numberOfLines={2}
        style={{ textAlign: 'center' }}
      >
        {product.title}
      </Text>
    </Card>
  )
}
