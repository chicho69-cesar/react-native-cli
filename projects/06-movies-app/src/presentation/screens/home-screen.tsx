import React from 'react'
import { Text, View } from 'react-native'
import useMovies from '../hooks/use-movies'

export default function HomeScreen() {
  const { } = useMovies()

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}
