import { useQueryClient } from '@tanstack/react-query'
import { Layout, List } from '@ui-kitten/components'
import React, { useState } from 'react'
import { RefreshControl } from 'react-native'

import { Product } from '../../../domain/entities/product'
import ProductCard from './product-card'

interface ProductListProps {
  products: Product[]
  fetchNextPage: () => void
}

export default function ProductList({ products, fetchNextPage }: ProductListProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const queryClient = useQueryClient()

  const handlePullToRefresh = async () => {
    setIsRefreshing(true)

    await new Promise((resolve) => setTimeout(resolve, 200))

    queryClient.invalidateQueries({
      queryKey: ['products', 'infinite']
    })

    setIsRefreshing(false)
  }

  return (
    <List
      data={products}
      numColumns={2}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item }) => <ProductCard product={item} />}
      ListFooterComponent={() => <Layout style={{ height: 150 }} />}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.8}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={handlePullToRefresh}
        />
      }
    />
  )
}
