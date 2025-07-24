import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'

import type { Movie } from '../../../core/entities/movie.entity'
import type { RootStackParams } from '../../navigation/app-navigation'

interface MoviePosterProps {
  movie: Movie
  height?: number
  width?: number
}

export default function MoviePoster({ movie, height, width }: MoviePosterProps) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  return (
    <Pressable
      onPress={() => navigation.navigate('details', { movieId: movie.id })}
      style={({ pressed }) => ({
        width,
        height,
        marginHorizontal: 4,
        paddingBottom: 20,
        paddingHorizontal: 8,
        opacity: pressed ? 0.9 : 1,
      })}
    >
      <View style={{ ...styles.imageContainer }}>
        <Image
          src={movie.poster}
          style={styles.image}
        />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  }
})
