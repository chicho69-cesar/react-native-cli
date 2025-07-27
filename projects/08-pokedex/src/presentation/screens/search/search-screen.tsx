import { useQuery } from '@tanstack/react-query'
import React, { useMemo, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { PokeApi } from '../../../config/adapters/poke-api.adapter'
import { globalTheme } from '../../../config/theme/global-theme'
import { PokemonAction } from '../../../domain/actions/pokemons/pokemons.action'
import PokemonCard from '../../components/pokemons/pokemon-card'
import FullScreenLoader from '../../components/ui/full-screen-loader'
import PokeballBg from '../../components/ui/pokeball-bg'
import useDebounce from '../../hooks/use-debounce'

export default function SearchScreen() {
  const { top } = useSafeAreaInsets()
  const [term, setTerm] = useState('')

  const debouncedTerm = useDebounce(500, term)

  const { isLoading, data: pokemonNameList = [] } = useQuery({
    queryKey: ['pokemons', 'all'],
    queryFn: () => PokemonAction.getPokemonNamesWithId(PokeApi.fetcher),
  })

  const pokemonNamesIdsList = useMemo(() => {
    if (!isNaN(Number(debouncedTerm))) {
      const pokemon = pokemonNameList.find((item) => item.id === Number(debouncedTerm),)
      return pokemon ? [pokemon] : []
    }

    if (debouncedTerm.length === 0) return []
    if (debouncedTerm.length < 3) return []

    return pokemonNameList.filter((item) =>
      item.name.includes(debouncedTerm.toLocaleLowerCase()),
    )
  }, [pokemonNameList, debouncedTerm])

  const { isLoading: isLoadingPokemons, data: pokemons = [] } = useQuery({
    queryKey: ['pokemons', 'by', pokemonNamesIdsList],
    queryFn: () => PokemonAction.getPokemonsByIds(
      PokeApi.fetcher,
      pokemonNamesIdsList.map((pokemon) => pokemon.id)
    ),
    staleTime: 1000 * 60 * 5,
  })

  if (isLoading) {
    return <FullScreenLoader />
  }

  return (
    <View
      style={[
        globalTheme.globalMargin,
        styles.container,
        { paddingTop: top + 10 }
      ]}
    >
      <TextInput
        placeholder='Buscar Pokémon'
        mode='flat'
        autoFocus
        autoCorrect={false}
        onChangeText={setTerm}
        value={term}
      />

      <PokeballBg style={styles.pokeballBg} />

      {isLoadingPokemons && (
        <ActivityIndicator style={styles.indicator} />
      )}

      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{ paddingTop: top + 20 }}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  indicator: {
    paddingTop: 20
  },
  container: {
    flex: 1
  },
  pokeballBg: {
    position: 'absolute',
    bottom: -50,
    left: -100,
    opacity: 0.5,
    width: 300,
    height: 300,
    zIndex: -1
  }
})
