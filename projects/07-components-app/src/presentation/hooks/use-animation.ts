import { useRef } from 'react'
import { Animated, Easing } from 'react-native'

export default function useAnimation() {
  const animatedOpacity = useRef(new Animated.Value(0)).current
  const animatedToTop = useRef(new Animated.Value(0)).current

  const fadeIn = ({ duration = 300, toValue = 1, callback = () => { } }) => {
    // Animated.timing(animatedToTop, {
    //   toValue,
    //   duration,
    //   useNativeDriver: true,
    //   easing: Easing.elastic(2),
    //   easing: Easing.bounce,
    // }).start(callback)

    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback)
  }

  const fadeOut = ({ duration = 300, toValue = 0, callback = () => { } }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(() => {
      callback()
      // animatedToTop.resetAnimation()
    })
  }

  const startMovingTopPosition = ({
    initialPosition = 0,
    toValue = 0,
    duration = 300,
    easing = Easing.linear,
    callback = () => { }
  }) => {
    animatedToTop.setValue(initialPosition)

    Animated.timing(animatedToTop, {
      toValue,
      duration,
      useNativeDriver: true,
      easing
    }).start(callback)
  }

  return {
    // Properties
    animatedOpacity,
    animatedToTop,

    // Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition
  }
}
