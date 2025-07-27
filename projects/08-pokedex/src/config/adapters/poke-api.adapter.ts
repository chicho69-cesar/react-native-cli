import { AxiosAdapter } from './http/axios.adapter'
import { HttpAdapter } from './http/http.adapter'

export class PokeApi {
  static fetcher: HttpAdapter = new AxiosAdapter({
    baseUrl: 'https://pokeapi.co/api/v2',
  })
}
