import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ScrollView } from 'react-native'

import FullScreenLoader from '../components/loaders/full-screen-loader'
import MovieDetails from '../components/movies/movie-details'
import MovieHeader from '../components/movies/movie-header'
import useMovie from '../hooks/use-movie'
import { RootStackParams } from '../navigation/app-navigation'

interface DetailsScreenProps extends StackScreenProps<RootStackParams, 'details'> { }

export default function DetailsScreen({ route }: DetailsScreenProps) {
  const { movieId } = route.params
  const { isLoading, cast, movie } = useMovie(movieId)

  if (isLoading) {
    return (
      <FullScreenLoader />
    )
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />

      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  )
}
