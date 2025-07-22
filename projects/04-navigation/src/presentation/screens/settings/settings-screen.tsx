import { StackActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

import { globalStyles } from '../../../config/theme/theme'
import PrimaryButton from '../../components/shared/primary-button'

export default function SettingsScreen() {
  const navigation = useNavigation()

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10 }}>
        Settings Screen
      </Text>

      <PrimaryButton
        title='Regresar'
        onPress={() => navigation.goBack()}
      />

      <PrimaryButton
        title='Ir al inicio'
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  )
}
