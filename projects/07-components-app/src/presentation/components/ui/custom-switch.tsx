import React from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import useTheme from '../../context/theme/use-theme'

interface CustomSwitchProps {
  isOn: boolean
  text?: string
  onChange: (value: boolean) => void
}

export default function CustomSwitch({ isOn, onChange, text }: CustomSwitchProps) {
  const { colors } = useTheme()

  return (
    <View
      style={[
        styles.switchRow,
        { backgroundColor: colors.cardBackground }
      ]}
    >
      {text && (
        <Text style={{ color: colors.text }}>{text}</Text>
      )}

      <Switch
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        ios_backgroundColor='#3e3e3e'
        value={isOn}
        onValueChange={onChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5
  }
})
