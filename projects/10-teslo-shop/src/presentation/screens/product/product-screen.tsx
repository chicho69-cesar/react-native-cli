import { StackScreenProps } from '@react-navigation/stack'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button, ButtonGroup, Input, Layout, Text, useTheme } from '@ui-kitten/components'
import { Formik } from 'formik'
import React, { useRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import { ProductActions } from '../../../actions/products/products'
import { CameraAdapter } from '../../../config/adapters/camera.adapter'
import { genders, sizes } from '../../../config/constants/products.constants'
import { Product } from '../../../domain/entities/product'
import ProductImages from '../../components/products/product-images'
import FullScreenLoader from '../../components/ui/full-screen-loader'
import MyIcon from '../../components/ui/my-icon'
import MainLayout from '../../layouts/main-layout'
import { RootStackParams } from '../../navigation/navigator'

interface ProductsScreenProps extends StackScreenProps<RootStackParams, 'product'> { }

export default function ProductsScreen({ route }: ProductsScreenProps) {
  const theme = useTheme()
  const productIdRef = useRef(route.params.productId)
  const queryClient = useQueryClient()

  const { isLoading, data: product } = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: () => ProductActions.getProductById(productIdRef.current),
  })

  const mutation = useMutation({
    mutationFn: (data: Product) => ProductActions.createUpdateProduct({ ...data, id: productIdRef.current }),
    onSuccess: (data) => {
      productIdRef.current = data.id

      queryClient.invalidateQueries({
        queryKey: ['product', data.id],
      })

      queryClient.invalidateQueries({
        queryKey: ['products', 'infinite'],
      })

      // queryClient.setQueryData(['product',  data.id ], data)
    }
  })

  if (isLoading || !product) {
    return <FullScreenLoader />
  }

  return (
    <Formik
      initialValues={product}
      onSubmit={mutation.mutate}
    >
      {({ handleChange, handleSubmit, values, errors, setFieldValue }) => (
        <MainLayout
          title={values.title}
          subtitle={`Precio: ${values.price}`}
          rightAction={async () => {
            const photos = await CameraAdapter.getPicturesFromLibrary()
            setFieldValue('images', [...values.images, ...photos])
          }}
          rightActionIcon='image-outline'
        >
          <ScrollView style={{ flex: 1 }}>
            <Layout>
              <ProductImages images={values.images} />
            </Layout>

            <Layout style={{ marginHorizontal: 10 }}>
              <Input
                label='Título'
                style={{ marginVertical: 5 }}
                value={values.title}
                onChangeText={handleChange('title')}
              />

              <Input
                label='Slug'
                value={values.slug}
                onChangeText={handleChange('slug')}
                style={{ marginVertical: 5 }}
              />

              <Input
                label='Descripción'
                value={values.description}
                onChangeText={handleChange('description')}
                multiline
                numberOfLines={5}
                style={{ marginVertical: 5 }}
              />
            </Layout>

            <Layout
              style={{
                marginVertical: 5,
                marginHorizontal: 15,
                flexDirection: 'row',
                gap: 10,
              }}
            >
              <Input
                label='Precio'
                value={values.price.toString()}
                onChangeText={handleChange('price')}
                style={{ flex: 1 }}
                keyboardType='numeric'
              />

              <Input
                label='Inventario'
                value={values.stock.toString()}
                onChangeText={handleChange('stock')}
                style={{ flex: 1 }}
                keyboardType='numeric'
              />
            </Layout>

            <ButtonGroup
              style={{ margin: 2, marginTop: 20, marginHorizontal: 15 }}
              size='small'
              appearance='outline'
            >
              {sizes.map((size) => (
                <Button
                  onPress={() => setFieldValue(
                    'sizes',
                    values.sizes.includes(size)
                      ? values.sizes.filter(s => s !== size)
                      : [...values.sizes, size]
                  )}
                  key={size}
                  style={{
                    flex: 1,
                    backgroundColor: values.sizes.includes(size)
                      ? theme['color-primary-200']
                      : undefined,
                  }}
                >
                  {size}
                </Button>
              ))}
            </ButtonGroup>

            <ButtonGroup
              style={{ margin: 2, marginTop: 20, marginHorizontal: 15 }}
              size='small'
              appearance='outline'
            >
              {genders.map((gender) => (
                <Button
                  onPress={() => setFieldValue('gender', gender)}
                  key={gender}
                  style={{
                    flex: 1,
                    backgroundColor: values.gender.startsWith(gender)
                      ? theme['color-primary-200']
                      : undefined,
                  }}
                >
                  {gender}
                </Button>
              ))}
            </ButtonGroup>

            <Button
              accessoryLeft={<MyIcon name='save-outline' white />}
              onPress={() => handleSubmit()}
              disabled={mutation.isPending}
              style={{ margin: 15 }}
            >
              Guardar
            </Button>

            <Text>{JSON.stringify(values, null, 2)}</Text>

            <Layout style={{ height: 200 }} />
          </ScrollView>
        </MainLayout>
      )}
    </Formik>
  )
}
