import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../../config/theme/styles'
import { usePermissionsStore } from '../../store/permissions/permissions.store'

export default function PermissionsScreen() {
  const locationStatus = usePermissionsStore((state) => state.locationStatus)
  const requestLocationPermission = usePermissionsStore((state) => state.requestLocationPermission)

  return (
    <View style={styles.container}>
      <Text>Habilitar ubicación</Text>

      <Pressable
        style={globalStyles.btnPrimary}
        onPress={requestLocationPermission}
      >
        <Text style={styles.title}>Habilitar Localización</Text>
      </Pressable>

      <Text>Estado actual: {locationStatus}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { color: 'white' }
})
