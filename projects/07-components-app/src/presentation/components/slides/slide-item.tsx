import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { globalStyles } from '../../../config/theme/theme'
import useTheme from '../../context/theme/use-theme'

interface Slide {
  title: string
  desc: string
  img: ImageSourcePropType
}

interface SlideItemProps {
  slide: Slide
}

export default function SlideItem({ slide }: SlideItemProps) {
  const { width } = useWindowDimensions()
  const { title, desc, img } = slide
  const { colors } = useTheme()

  return (
    <View
      style={[
        styles.container,
        {
          width,
          backgroundColor: colors.cardBackground,
        }
      ]}
    >
      <Image
        source={img}
        style={[
          styles.image,
          {
            width: width * 0.7,
            height: width * 0.7
          }
        ]}
      />

      <Text style={[globalStyles.title, { color: colors.primary }]}>
        {title}
      </Text>

      <Text
        style={{
          color: colors.text,
          marginTop: 20,
        }}
      >
        {desc}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'center',
    alignSelf: 'center',
  }
})
