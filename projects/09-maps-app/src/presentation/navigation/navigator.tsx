import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import LoadingScreen from '../screens/loading/loading-screen'
import MapsScreen from '../screens/maps/maps-screen'
import PermissionsScreen from '../screens/permissions/permissions-screen'

export type RootStackParams = {
  loading: undefined
  permissions: undefined
  map: undefined
}

const Stack = createStackNavigator<RootStackParams>()

export default function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName='loading'
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name='loading' component={LoadingScreen} />
      <Stack.Screen name='map' component={MapsScreen} />
      <Stack.Screen name='permissions' component={PermissionsScreen} />
    </Stack.Navigator>
  )
}
