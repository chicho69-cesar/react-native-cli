import React from 'react'
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme'
import useTheme from '../../context/theme/use-theme'

interface ButtonProps {
  text: string
  style?: StyleProp<ViewStyle>
  onPress: () => void
}

export default function Button({ onPress, text, style }: ButtonProps) {
  const { colors } = useTheme()

  return (
    <Pressable
      style={({ pressed }) => ([
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary
        },
        style
      ])}
      onPress={onPress}
    >
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor
          }
        ]}
      >
        {text}
      </Text>
    </Pressable>
  )
}
