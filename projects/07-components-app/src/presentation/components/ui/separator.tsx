import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import useTheme from '../../context/theme/use-theme'

interface SeparatorProps {
  style?: StyleProp<ViewStyle>
}

export default function Separator({ style }: SeparatorProps) {
  const { colors } = useTheme()

  return (
    <View style={{ backgroundColor: colors.cardBackground }}>
      <View
        style={[
          {
            alignSelf: 'center',
            width: '80%',
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.1,
            marginVertical: 8
          },
          style
        ]}
      />
    </View>
  )
}
