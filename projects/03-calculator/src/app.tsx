import React from 'react'
import { StatusBar, View } from 'react-native'

import { styles } from './config/theme/app-theme'
import CalculatorScreen from './presentation/screens/calculator-screen'

export default function app() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle='light-content' backgroundColor='black' />
      <CalculatorScreen />
    </View>
  )
}
