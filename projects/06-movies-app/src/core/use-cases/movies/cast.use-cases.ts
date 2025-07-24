import { HttpAdapter } from '../../../config/adapters/http/http.adapter'
import { MovieDBCastResponse } from '../../../infrastructure/interfaces/movie-db.responses'
import { CastMapper } from '../../../infrastructure/mappers/cast.mapper'
import type { Cast } from '../../entities/cast.entity'

export class CastUsesCases {
  static async getMovieCastUseCase(fetcher: HttpAdapter, movieId: number): Promise<Cast[]> {
    try {
      const castResponse = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`)
      const actors = castResponse.cast.map(CastMapper.fromDBMovieCastToEntity)
      return actors
    } catch (error) {
      console.error(`Error fetching cast for movie with ID ${movieId}:`, error)
      throw new Error(`Failed to fetch cast for movie with ID ${movieId}`)
    }
  }
}
