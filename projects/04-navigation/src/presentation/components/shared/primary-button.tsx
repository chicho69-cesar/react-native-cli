import React from 'react'
import { Pressable, Text } from 'react-native'

import { globalStyles } from '../../../config/theme/theme'

interface PrimaryButtonProps {
  title: string
  onPress: () => void
}

export default function PrimaryButton({ onPress, title }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={globalStyles.primaryButton}
    >
      <Text style={globalStyles.buttonText}>
        {title}
      </Text>
    </Pressable>
  )
}
