import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, styles as globalStyles } from '../../config/theme/app-theme'
import CalculatorButton from '../components/calculator-button'
import useCalculator, { Operator } from '../hooks/use-calculator'

export default function CalculatorScreen() {
  const {
    // number,
    prevNumber,
    formula,
    buildNumber,
    clean,
    toggleSign,
    deleteOperation,
    operation,
    calculateResult
  } = useCalculator()

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={styles.container}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.mainResult}
        >
          {formula}
        </Text>

        {formula === prevNumber ? (
          <Text style={globalStyles.subResult} />
        ) : (
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={globalStyles.subResult}
          >
            {prevNumber}
          </Text>
        )}
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label='C'
          blackText
          color={colors.lightGray}
          onPress={clean}
        />

        <CalculatorButton
          label='+/-'
          blackText
          color={colors.lightGray}
          onPress={toggleSign}
        />

        <CalculatorButton
          label='del'
          blackText
          color={colors.lightGray}
          onPress={deleteOperation}
        />

        <CalculatorButton
          label='÷'
          color={colors.orange}
          onPress={() => operation(Operator.divide)}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='7' onPress={() => buildNumber('7')} />
        <CalculatorButton label='8' onPress={() => buildNumber('8')} />
        <CalculatorButton label='9' onPress={() => buildNumber('9')} />
        <CalculatorButton label='×' color={colors.orange} onPress={() => operation(Operator.multiply)} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='4' onPress={() => buildNumber('4')} />
        <CalculatorButton label='5' onPress={() => buildNumber('5')} />
        <CalculatorButton label='6' onPress={() => buildNumber('6')} />
        <CalculatorButton label='-' color={colors.orange} onPress={() => operation(Operator.subtract)} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='1' onPress={() => buildNumber('1')} />
        <CalculatorButton label='2' onPress={() => buildNumber('2')} />
        <CalculatorButton label='3' onPress={() => buildNumber('3')} />
        <CalculatorButton label='+' color={colors.orange} onPress={() => operation(Operator.add)} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label='0'
          doubleSize
          onPress={() => buildNumber('0')}
        />

        <CalculatorButton
          label='.'
          onPress={() => buildNumber('.')}
        />

        <CalculatorButton
          label='='
          color={colors.orange}
          onPress={calculateResult}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  }
})
