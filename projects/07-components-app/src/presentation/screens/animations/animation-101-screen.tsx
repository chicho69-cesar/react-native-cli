import React from 'react'
import { Animated, Easing, StyleSheet } from 'react-native'

import { colors } from '../../../config/theme/theme'
import Button from '../../components/ui/button'
import CustomView from '../../components/ui/custom-view'
import useTheme from '../../context/theme/use-theme'
import useAnimation from '../../hooks/use-animation'

export default function Animation101Screen() {
  const { colors } = useTheme()
  const { animatedOpacity, animatedToTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation()

  return (
    <CustomView style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary
          },
          {
            opacity: animatedOpacity,
            transform: [{ translateY: animatedToTop }]
          }
        ]}
      />

      <Button
        text='FadeIn'
        onPress={() => {
          fadeIn({})
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 750
          })

        }}
        style={{ marginTop: 10 }}
      />

      <Button
        text='FadeOut'
        onPress={() => fadeOut({})}
        style={{ marginTop: 10 }}
      />
    </CustomView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  }
})
