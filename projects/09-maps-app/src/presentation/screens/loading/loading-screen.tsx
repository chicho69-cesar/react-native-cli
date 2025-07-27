import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={30} color='black' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
