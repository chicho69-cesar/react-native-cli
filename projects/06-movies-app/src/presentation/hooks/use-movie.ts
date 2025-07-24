import { useEffect, useState } from 'react'
import { MovieDBAdapter } from '../../config/adapters/movieDB.adapter'
import type { Cast } from '../../core/entities/cast.entity'
import type { FullMovie } from '../../core/entities/movie.entity'
import { CastUsesCases } from '../../core/use-cases/movies/cast.use-cases'
import { MoviesUsesCases } from '../../core/use-cases/movies/movies.use-cases'

const movieDB = new MovieDBAdapter().movieDB

export default function useMovie(movieId: number) {
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState<FullMovie | null>(null)
  const [cast, setCast] = useState<Cast[]>([])

  useEffect(() => {
    loadMovie()
  }, [])

  const loadMovie = async () => {
    setIsLoading(true)

    const fullMoviePromise = MoviesUsesCases.getMovieByIdUseCase(movieDB, movieId)
    const castPromise = CastUsesCases.getMovieCastUseCase(movieDB, movieId)

    const [
      fullMovieData,
      castData
    ] = await Promise.all([fullMoviePromise, castPromise])

    setMovie(fullMovieData)
    setCast(castData)
    setIsLoading(false)
  }

  return {
    isLoading,
    movie,
    cast,
  }
}
