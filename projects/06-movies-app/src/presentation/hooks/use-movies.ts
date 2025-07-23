import { useEffect, useState } from 'react'

import { MovieDBAdapter } from '../../config/adapters/movieDB.adapter'
import { Movie } from '../../core/entities/movie.entity'
import { MoviesUsesCases } from '../../core/use-cases/movies/movies.use-cases'

const movieDB = new MovieDBAdapter().movieDB

export default function useMovies() {
  const [isLoading, setIsLoading] = useState(true)
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
  const [popular, setPopular] = useState<Movie[]>([])
  const [topRated, setToRated] = useState<Movie[]>([])
  const [upcoming, setUpcoming] = useState<Movie[]>([])

  useEffect(() => {
    initialLoad()
  }, [])

  const initialLoad = async () => {
    const nowPlayingMovies = MoviesUsesCases.moviesNowPlayingUseCase(movieDB)
    const popularMovies = MoviesUsesCases.moviesPopularUseCase(movieDB)
    const topRatedMovies = MoviesUsesCases.moviesTopRatedUseCase(movieDB)
    const upcomingMovies = MoviesUsesCases.moviesUpcomingUseCase(movieDB)

    const [
      nowPlayingData,
      popularData,
      topRatedData,
      upcomingData
    ] = await Promise.all([
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies
    ])

    setNowPlaying(nowPlayingData)
    setPopular(popularData)
    setToRated(topRatedData)
    setUpcoming(upcomingData)

    setIsLoading(false)
  }

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming
  }
}
