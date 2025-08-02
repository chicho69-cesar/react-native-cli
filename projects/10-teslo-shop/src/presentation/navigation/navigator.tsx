import { createStackNavigator, StackCardStyleInterpolator } from '@react-navigation/stack'
import React from 'react'

import LoginScreen from '../screens/auth/login-screen'
import RegisterScreen from '../screens/auth/register-screen'
import HomeScreen from '../screens/home/home-screen'
import LoadingScreen from '../screens/loading/loading-screen'
import ProductsScreen from '../screens/product/product-screen'

export type RootStackParams = {
  loading: undefined
  login: undefined
  register: undefined
  home: undefined
  product: { productId: string }
}

const Stack = createStackNavigator<RootStackParams>()

const fadeAnimation: StackCardStyleInterpolator = ({ current }) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  }
}

export default function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName='loading'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{
          cardStyleInterpolator: fadeAnimation,
        }}
        name='loading'
        component={LoadingScreen}
      />

      <Stack.Screen
        options={{
          cardStyleInterpolator: fadeAnimation,
        }}
        name='login'
        component={LoginScreen}
      />

      <Stack.Screen
        options={{
          cardStyleInterpolator: fadeAnimation,
        }}
        name='register'
        component={RegisterScreen}
      />

      <Stack.Screen
        options={{
          cardStyleInterpolator: fadeAnimation,
        }}
        name='home'
        component={HomeScreen}
      />

      <Stack.Screen name='product' component={ProductsScreen} />
    </Stack.Navigator>
  )
}
