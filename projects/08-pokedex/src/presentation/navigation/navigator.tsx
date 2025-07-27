import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import HomeScreen from '../screens/home/home-screen'
import PokemonScreen from '../screens/pokemon/pokemon-screen'
import SearchScreen from '../screens/search/search-screen'

export type RootStackParams = {
  home: undefined
  search: undefined
  pokemon: { pokemonId: number }
}

const Stack = createStackNavigator<RootStackParams>()

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='home' component={HomeScreen} />
      <Stack.Screen name='search' component={SearchScreen} />
      <Stack.Screen name='pokemon' component={PokemonScreen} />
    </Stack.Navigator>
  )
}
