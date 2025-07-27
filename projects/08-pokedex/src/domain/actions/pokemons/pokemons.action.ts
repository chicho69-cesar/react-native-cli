import { HttpAdapter } from '../../../config/adapters/http/http.adapter'
import { PokeAPIPaginatedResponse, PokeAPIPokemon } from '../../../infrastructure/interfaces/pokeapi.interfaces'
import { PokemonMapper } from '../../../infrastructure/mappers/pokemon.mapper'
import type { Pokemon } from '../../entities/pokemon'

export class PokemonAction {
  static async getPokemons(
    http: HttpAdapter,
    { page, limit = 20 }: { page: number, limit?: number }
  ): Promise<Pokemon[]> {
    try {
      const data = await http.get<PokeAPIPaginatedResponse>('/pokemon', {
        params: {
          offset: page * limit,
          limit,
        },
      })

      const pokemonPromises = data.results.map((info) => {
        return http.get<PokeAPIPokemon>(info.url)
      })

      const pokeApiPokemons = await Promise.all(pokemonPromises)
      const pokemonsPromises = pokeApiPokemons.map(PokemonMapper.pokeApiPokemonToEntity)
      const pokemons = await Promise.all(pokemonsPromises)

      return pokemons
    } catch (error) {
      console.error('Error fetching pokemons:', error)
      throw new Error('Failed to fetch pokemons')
    }
  }

  static async getPokemonById(http: HttpAdapter, id: number): Promise<Pokemon> {
    try {
      const data = await http.get<PokeAPIPokemon>(`/pokemon/${id}`)
      const pokemon = await PokemonMapper.pokeApiPokemonToEntity(data)

      return pokemon
    } catch (error) {
      console.error('Error fetching pokemon by ID:', error)
      throw new Error('Failed to fetch pokemon by ID')
    }
  }

  static async getPokemonNamesWithId(http: HttpAdapter): Promise<{ id: number, name: string }[]> {
    try {
      const data = await http.get<PokeAPIPaginatedResponse>('/pokemon', {
        params: {
          limit: 1000,
        }
      })

      return data.results.map((pokemon) => ({
        id: Number(pokemon.url.split('/')[6]),
        name: pokemon.name,
      }))
    } catch (error) {
      console.error('Error fetching pokemon names with ID:', error)
      throw new Error('Failed to fetch pokemon names with ID')
    }
  }

  static async getPokemonsByIds(http: HttpAdapter, ids: number[]): Promise<Pokemon[]> {
    try {
      const pokemonPromises = ids.map((id) => {
        return http.get<PokeAPIPokemon>(`/pokemon/${id}`)
      })

      const pokeApiPokemons = await Promise.all(pokemonPromises)
      const pokemonsPromises = pokeApiPokemons.map(PokemonMapper.pokeApiPokemonToEntity)
      const pokemons = await Promise.all(pokemonsPromises)

      return pokemons
    } catch (error) {
      console.error('Error fetching pokemons by IDs:', error)
      throw new Error('Failed to fetch pokemons by IDs')
    }
  }
}
