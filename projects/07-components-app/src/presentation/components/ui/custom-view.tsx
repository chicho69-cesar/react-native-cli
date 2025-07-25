import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme'
import useTheme from '../../context/theme/use-theme'

interface CustomViewProps {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode | React.ReactNode[]
  margin?: boolean
}

export default function CustomView({ children, style, margin = false }: CustomViewProps) {
  const { colors } = useTheme()

  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        { backgroundColor: colors.background },
        style
      ]}
    >
      {children}
    </View>
  )
}
