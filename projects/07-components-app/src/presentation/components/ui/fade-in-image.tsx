import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native'
import useAnimation from '../../hooks/use-animation'

interface FadeInImageProps {
  uri: string
  style?: StyleProp<ImageStyle>
}

export default function FadeInImage({ uri, style }: FadeInImageProps) {
  const { animatedOpacity, fadeIn } = useAnimation()
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          size={30}
          color='grey'
        />
      )}

      <Animated.Image
        source={{ uri }}
        onLoadEnd={() => {
          fadeIn({})
          setIsLoading(false)
        }}
        style={[
          style,
          { opacity: animatedOpacity }
        ]}
      />
    </View>
  )
}
