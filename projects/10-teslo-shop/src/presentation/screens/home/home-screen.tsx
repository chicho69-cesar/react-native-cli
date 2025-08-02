import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'

import { ProductActions } from '../../../actions/products/products'
import ProductList from '../../components/products/product-list'
import FAB from '../../components/ui/fab'
import FullScreenLoader from '../../components/ui/full-screen-loader'
import useAuth from '../../hooks/auth/use-auth'
import MainLayout from '../../layouts/main-layout'
import { RootStackParams } from '../../navigation/navigator'

export default function HomeScreen() {
  const { logout } = useAuth()
  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  // const { isLoading, data: products = [] } = useQuery({
  //   queryKey: ['products', 'infinite'],
  //   staleTime: 1000 * 60 * 60,
  //   queryFn: () => ProductActions.getProductsByPage(0),
  // })

  const { isLoading, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60,
    initialPageParam: 0,
    queryFn: async (params) => {
      const products = await ProductActions.getProductsByPage(params.pageParam)
      return products
    },
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length
    }
  })

  return (
    <>
      <MainLayout
        title='TesloShop - Products'
        subtitle='Aplicación administrativa'
      >
        {isLoading ? (
          <FullScreenLoader />
        ) : (
          <ProductList
            products={data?.pages.flat() || []}
            fetchNextPage={fetchNextPage}
          />
        )}
      </MainLayout>

      <FAB
        iconName='plus-outline'
        onPress={() => navigation.navigate('product', { productId: 'new' })}
        style={{
          position: 'absolute',
          bottom: 30,
          right: 20,
        }}
      />
    </>
  )
}
