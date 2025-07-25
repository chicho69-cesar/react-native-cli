import React from 'react'
import { Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { globalStyles } from '../../../config/theme/theme'
import useTheme from '../../context/theme/use-theme'

interface TitleProps {
  text: string
  safe?: boolean
  white?: boolean
}

export default function Title({ text, safe, white }: TitleProps) {
  const { top } = useSafeAreaInsets()
  const { colors } = useTheme()

  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: white ? 'white' : colors.text
      }}
    >
      {text}
    </Text>
  )
}
