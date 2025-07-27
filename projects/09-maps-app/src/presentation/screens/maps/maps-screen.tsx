/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import Map from '../../components/maps/map'
import { useLocationStore } from '../../store/location/location.store'
import LoadingScreen from '../loading/loading-screen'

export default function MapsScreen() {
  const lastKnownLocation = useLocationStore((state) => state.lastKnownLocation)
  const getLocation = useLocationStore((state) => state.getLocation)

  useEffect(() => {
    if (!lastKnownLocation) {
      getLocation()
    }
  }, [])

  if (!lastKnownLocation) {
    return <LoadingScreen />
  }

  return (
    <View style={styles.container}>
      <Map
        initialLocation={lastKnownLocation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  }
})
