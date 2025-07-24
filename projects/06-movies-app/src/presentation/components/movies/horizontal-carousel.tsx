import React, { useEffect, useRef } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'

import type { Movie } from '../../../core/entities/movie.entity'
import MoviePoster from './movie-poster'

interface HorizontalCarouselProps {
  movies: Movie[]
  title?: string

  loadNextPage?: () => void
}

export default function HorizontalCarousel({ movies, title, loadNextPage }: HorizontalCarouselProps) {
  const isLoading = useRef(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      isLoading.current = false
    }, 200)

    return () => clearTimeout(timeout)
  }, [movies])

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return

    const {
      contentOffset,
      layoutMeasurement,
      contentSize
    } = event.nativeEvent

    const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width
    if (!isEndReached) return

    isLoading.current = true
    loadNextPage && loadNextPage()
  }

  return (
    <View style={{ height: title ? 260 : 220 }}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: '300',
            marginLeft: 10,
            marginBottom: 10
          }}
        >
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        keyExtractor={(movie, index) => `${movie.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <MoviePoster
            movie={item}
            height={200}
            width={140}
          />
        )}
      />
    </View>
  )
}
