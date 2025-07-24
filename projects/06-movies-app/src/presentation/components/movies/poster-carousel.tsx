import React from 'react'
import { ScrollView, View } from 'react-native'

import type { Movie } from '../../../core/entities/movie.entity'
import MoviePoster from './movie-poster'

interface PosterCarouselProps {
  movies: Movie[]
  height?: number
}

export default function PosterCarousel({ movies, height }: PosterCarouselProps) {
  return (
    <View style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie) => (
          <MoviePoster
            key={movie.id}
            movie={movie}
            width={300}
            height={400}
          />
        ))}
      </ScrollView>
    </View>
  )
}
