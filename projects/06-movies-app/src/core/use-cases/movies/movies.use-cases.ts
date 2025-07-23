import { HttpAdapter } from '../../../config/adapters/http/http.adapter'
import { MovieDBMoviesResponse, NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db.responses'
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper'
import type { Movie } from '../../entities/movie.entity'

export class MoviesUsesCases {
  static async moviesNowPlayingUseCase(fetcher: HttpAdapter): Promise<Movie[]> {
    try {
      const nowPlayingResponse = await fetcher.get<NowPlayingResponse>('/now_playing')
      return nowPlayingResponse.results.map(MovieMapper.fromDBResponseToEntity)
    } catch (error) {
      console.error('Error fetching now playing movies:', error)
      throw new Error('Failed to fetch now playing movies')
    }
  }

  static async moviesPopularUseCase(fetcher: HttpAdapter): Promise<Movie[]> {
    try {
      const popularResponse = await fetcher.get<MovieDBMoviesResponse>('/popular')
      return popularResponse.results.map(MovieMapper.fromDBResponseToEntity)
    } catch (error) {
      console.error('Error fetching popular movies:', error)
      throw new Error('Failed to fetch popular movies')
    }
  }

  static async moviesTopRatedUseCase(fetcher: HttpAdapter): Promise<Movie[]> {
    try {
      const topRatedResponse = await fetcher.get<MovieDBMoviesResponse>('/top_rated')
      return topRatedResponse.results.map(MovieMapper.fromDBResponseToEntity)
    } catch (error) {
      console.error('Error fetching top rated movies:', error)
      throw new Error('Failed to fetch top rated movies')
    }
  }

  static async moviesUpcomingUseCase(fetcher: HttpAdapter): Promise<Movie[]> {
    try {
      const upcomingResponse = await fetcher.get<MovieDBMoviesResponse>('/upcoming')
      return upcomingResponse.results.map(MovieMapper.fromDBResponseToEntity)
    } catch (error) {
      console.error('Error fetching upcoming movies:', error)
      throw new Error('Failed to fetch upcoming movies')
    }
  }
}
