import { HttpAdapter } from '../../../config/adapters/http/http.adapter'
import { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db.responses'
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper'
import type { Movie } from '../../entities/movie.entity'

export class NowPlayingUseCase {
  static async moviesNowPlayingUseCase(fetcher: HttpAdapter): Promise<Movie[]> {
    try {
      const nowPlayingResponse = await fetcher.get<NowPlayingResponse>('/now_playing')
      return nowPlayingResponse.results.map(MovieMapper.fromDBResponseToEntity)
    } catch (error) {
      console.error('Error fetching now playing movies:', error)
      throw new Error('Failed to fetch now playing movies')
    }
  }
}
