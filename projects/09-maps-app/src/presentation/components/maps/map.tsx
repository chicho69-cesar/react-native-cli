/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import { Platform, StyleSheet } from 'react-native'
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps'

import { Location } from '../../../infrastructure/interfaces/location'
import { useLocationStore } from '../../store/location/location.store'
import FAB from '../ui/fab'

interface MapProps {
  showUserLocation?: boolean
  initialLocation: Location
}

export default function Map({ initialLocation, showUserLocation = true }: MapProps) {
  const mapRef = useRef<MapView | null>(null)
  const cameraLocation = useRef<Location>(initialLocation)
  const [isFollowingUser, setIsFollowingUser] = useState(true)
  const [isShowingPolyline, setIsShowingPolyline] = useState(true)

  const lastKnownLocation = useLocationStore((state) => state.lastKnownLocation)
  const userLocations = useLocationStore((state) => state.userLocations)
  const getLocation = useLocationStore((state) => state.getLocation)
  const watchLocation = useLocationStore((state) => state.watchLocation)
  const clearWatchLocation = useLocationStore((state) => state.clearWatchLocation)

  useEffect(() => {
    watchLocation()

    return () => {
      clearWatchLocation()
    }
  }, [])

  useEffect(() => {
    if (lastKnownLocation && isFollowingUser) {
      moveCameraToLocation(lastKnownLocation)
    }
  }, [lastKnownLocation, isFollowingUser])

  const moveCameraToLocation = (location: Location) => {
    if (!mapRef.current) return
    mapRef.current.animateCamera({ center: location })
  }

  const moveToCurrentLocation = async () => {
    if (!lastKnownLocation) {
      moveCameraToLocation(initialLocation)
    }

    const location = await getLocation()
    if (!location) return

    moveCameraToLocation(location)
  }

  return (
    <>
      <MapView
        // eslint-disable-next-line no-return-assign
        ref={(map) => mapRef.current = map! as any}
        showsUserLocation={showUserLocation}
        provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE}
        style={styles.container}
        onTouchStart={() => setIsFollowingUser(false)}
        region={{
          latitude: cameraLocation.current.latitude,
          longitude: cameraLocation.current.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {isShowingPolyline && (
          <Polyline
            coordinates={userLocations}
            strokeColor='black'
            strokeWidth={5}
          />
        )}

        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title='Este es el título del marcador'
          description='Este es el cuerpo del marcador'
          image={require('../../../assets/marker.png')}
        />
      </MapView>

      <FAB
        iconName={isShowingPolyline ? 'eye-outline' : 'eye-off-outline'}
        onPress={() => setIsShowingPolyline(!isShowingPolyline)}
        style={styles.fab1}
      />

      <FAB
        iconName={isFollowingUser ? 'walk-outline' : 'accessibility-outline'}
        onPress={() => setIsFollowingUser(!isFollowingUser)}
        style={styles.fab2}
      />

      <FAB
        iconName='compass-outline'
        onPress={moveToCurrentLocation}
        style={styles.fab3}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab1: {
    bottom: 140,
    right: 20,
  },
  fab2: {
    bottom: 80,
    right: 20,
  },
  fab3: {
    bottom: 20,
    right: 20,
  },
})
