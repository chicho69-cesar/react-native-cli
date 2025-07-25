import React, { PropsWithChildren } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import useTheme from '../../context/theme/use-theme'

interface CardProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>
}

export default function Card({ children, style }: CardProps) {
  const { colors } = useTheme()

  return (
    <View style={[
      {
        backgroundColor: colors.cardBackground,
        borderRadius: 10,
        padding: 10
      },
      style
    ]}>
      {children}
    </View>
  )
}
