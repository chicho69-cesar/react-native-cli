import { Icon, useTheme } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet } from 'react-native'

interface MyIconProps {
  name: string
  color?: string
  white?: boolean
}

export default function MyIcon({ name, color, white = false }: MyIconProps) {
  const theme = useTheme()

  if (white) {
    color = theme['color-info-100'];
  } else if (!color) {
    color = theme['text-basic-color'];
  } else {
    color = theme[color] ?? theme['text-basic-color'];
  }

  return (
    <Icon
      style={styles.icon}
      fill={color}
      name={name}
    />
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  }
})
