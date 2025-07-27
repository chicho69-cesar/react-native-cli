import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, StyleSheet, View } from 'react-native'
import useAnimation from '../../hooks/use-animation'

interface FadeInImageProps {
  uri: string
  style?: StyleProp<ImageStyle>
}

export default function FadeInImage({ uri, style }: FadeInImageProps) {
  const { fadeIn, animatedOpacity } = useAnimation()
  const [isLoading, setIsLoading] = useState(true)

  const isDisposed = useRef(false)

  useEffect(() => {
    return () => {
      isDisposed.current = true
    }
  }, [])

  const handleLoadEnd = () => {
    if (isDisposed.current) return
    fadeIn({})
    setIsLoading(false)
  }

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          style={styles.indicator}
          color='grey'
          size={30}
        />
      )}

      <Animated.Image
        source={{ uri }}
        onLoadEnd={handleLoadEnd}
        style={[
          style,
          styles.image,
          { opacity: animatedOpacity },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicator: {
    position: 'absolute',
  },
  image: {
    resizeMode: 'contain',
  }
})
