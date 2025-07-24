import { THE_MOVIE_DB_KEY } from '@env'
import { AxiosAdapter } from './http/axios.adapter'
import { HttpAdapter } from './http/http.adapter'

export class MovieDBAdapter {
  private fetcher: HttpAdapter

  constructor() {
    this.fetcher = new AxiosAdapter({
      baseUrl: 'https://api.themoviedb.org/3/movie',
      params: {
        api_key: THE_MOVIE_DB_KEY || '',
        language: 'es'
      }
    })
  }

  get movieDB(): HttpAdapter {
    return this.fetcher
  }

  set movieDB(fetcher: HttpAdapter) {
    this.fetcher = fetcher
  }
}
