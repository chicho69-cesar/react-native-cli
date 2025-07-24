import React from 'react'
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import FullScreenLoader from '../components/loaders/full-screen-loader'
import HorizontalCarousel from '../components/movies/horizontal-carousel'
import PosterCarousel from '../components/movies/poster-carousel'
import useMovies from '../hooks/use-movies'

export default function HomeScreen() {
  const { top } = useSafeAreaInsets()

  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    loadMorePopularNextPage
  } = useMovies()

  if (isLoading) {
    return (
      <FullScreenLoader />
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        <PosterCarousel movies={nowPlaying} />

        <HorizontalCarousel
          movies={popular}
          title='Populares'
          loadNextPage={loadMorePopularNextPage}
        />

        <HorizontalCarousel movies={topRated} title='Mejor calificadas' />
        <HorizontalCarousel movies={upcoming} title='Próximamente' />
      </View>
    </ScrollView>
  )
}
