import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { globalStyles } from '../../../config/theme/theme'
import PrimaryButton from '../../components/shared/primary-button'
import { RootStackParams } from '../../routes/stack-navigator'

const products = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
  { id: 4, name: 'Producto 4' },
  { id: 5, name: 'Producto 5' },
  { id: 6, name: 'Producto 6' },
]

export default function ProductsScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>
        Productos
      </Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            title={item.name}
            onPress={() => navigation.navigate('product', {
              id: item.id,
              name: item.name
            })}
          />
        )}
      />

      <Text style={styles.title}>
        Ajustes
      </Text>

      <PrimaryButton
        title='Ajustes'
        onPress={() => navigation.navigate('settings')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 10
  }
})
