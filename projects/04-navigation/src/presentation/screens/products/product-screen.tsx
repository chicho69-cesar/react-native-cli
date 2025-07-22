import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { globalStyles } from '../../../config/theme/theme'
import { RootStackParams } from '../../routes/stack-navigator'

export default function ProductScreen() {
  const params = useRoute<RouteProp<RootStackParams, 'product'>>().params
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  }, [])

  return (
    <View style={globalStyles.container}>
      <Text>ProductScreen</Text>

      <Text style={styles.productText}>
        {params.id} - {params.name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  productText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  }
})
