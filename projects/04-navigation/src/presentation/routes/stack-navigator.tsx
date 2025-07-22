import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import HomeScreen from '../screens/home/home-screen'
import ProductScreen from '../screens/products/product-screen'
import ProductsScreen from '../screens/products/products-screen'
import SettingsScreen from '../screens/settings/settings-screen'

export type RootStackParams = {
  home: undefined
  product: { id: number, name: string }
  products: undefined
  settings: undefined
}

const Stack = createStackNavigator<RootStackParams>()

export default function StackNavigator() {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        }
      }}
    >
      <Stack.Screen name='home' component={HomeScreen} />
      <Stack.Screen name='product' component={ProductScreen} />
      <Stack.Screen name='products' component={ProductsScreen} />
      <Stack.Screen name='settings' component={SettingsScreen} />
    </Stack.Navigator>
  )
}
