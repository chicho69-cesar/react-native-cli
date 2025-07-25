import React from 'react'
import { Text, View } from 'react-native'

import Button from '../../components/ui/button'
import CustomView from '../../components/ui/custom-view'
import Title from '../../components/ui/title'
import useTheme from '../../context/theme/use-theme'

export default function ChangeThemeScreen() {
  const { colors, currentTheme, setTheme } = useTheme()

  return (
    <CustomView margin>
      <Title text={`Cambiar tema: ${currentTheme}`} safe />

      <Button
        text='Light'
        onPress={() => setTheme('light')}
      />

      <View style={{ height: 10 }} />

      <Button
        text='Dark'
        onPress={() => setTheme('dark')}
      />

      <View style={{ height: 10 }} />

      <Text style={{ color: colors.text }}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  )
}
