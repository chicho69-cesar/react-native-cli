import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import DetailsScreen from '../screens/details-screen'
import HomeScreen from '../screens/home-screen'

export type RootStackParams = {
  home: undefined
  details: { movieId: string }
}

const Stack = createStackNavigator<RootStackParams>()

export default function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='home' component={HomeScreen} />
      <Stack.Screen name='details' component={DetailsScreen} />
    </Stack.Navigator>
  )
}
