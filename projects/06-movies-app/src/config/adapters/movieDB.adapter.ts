import { AxiosAdapter } from './http/axios.adapter'
import { HttpAdapter } from './http/http.adapter'

export class MovieDBAdapter {
  private fetcher: HttpAdapter

  constructor() {
    this.fetcher = new AxiosAdapter({
      baseUrl: 'https://api.themoviedb.org/3/movie',
      params: {
        api_key: '9d6a90c2b95d4a700ee5cb9705c94b0f',
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
