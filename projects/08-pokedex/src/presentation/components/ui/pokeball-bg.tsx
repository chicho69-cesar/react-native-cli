import React from 'react'
import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native'
import useTheme from '../../context/theme/use-theme'

interface PokeballBgProps {
  style?: StyleProp<ImageStyle>
}

export default function PokeballBg({ style }: PokeballBgProps) {
  const { isDark } = useTheme()

  const pokeballImg = isDark
    ? require('../../../assets/pokeball-light.png')
    : require('../../../assets/pokeball-dark.png')

  return (
    <Image
      source={pokeballImg}
      style={[
        styles.image,
        style,
      ]}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    opacity: 0.3,
  }
})
