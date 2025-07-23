import { useEffect, useState } from 'react'

import { MovieDBAdapter } from '../../config/adapters/movieDB.adapter'
import { Movie } from '../../core/entities/movie.entity'
import { NowPlayingUseCase } from '../../core/use-cases/movies/now-playing.use-case'

const movieDB = new MovieDBAdapter().movieDB

export default function useMovies() {
  const [isLoading, setIsLoading] = useState(true)
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])

  useEffect(() => {
    initialLoad()
  }, [])

  const initialLoad = async () => {
    const nowPlayingMovies = await NowPlayingUseCase.moviesNowPlayingUseCase(movieDB)
    console.log('Now Playing Movies:', nowPlayingMovies)
  }

  return {
    isLoading,
    nowPlaying
  }
}
