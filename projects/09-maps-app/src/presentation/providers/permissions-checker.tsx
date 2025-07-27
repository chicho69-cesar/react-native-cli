/* eslint-disable react-hooks/exhaustive-deps */
import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { PropsWithChildren, useEffect } from 'react'
import { AppState } from 'react-native'

import { RootStackParams } from '../navigation/navigator'
import { usePermissionsStore } from '../store/permissions/permissions.store'

export default function PermissionsChecker({ children }: PropsWithChildren) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()
  const locationStatus = usePermissionsStore((state) => state.locationStatus)
  const checkLocationPermission = usePermissionsStore((state) => state.checkLocationPermission)

  useEffect(() => {
    if (locationStatus === 'granted') {
      navigation.reset({
        routes: [{ name: 'map' }],
      })
    } else if (locationStatus !== 'undetermined') {
      navigation.reset({
        routes: [{ name: 'permissions' }],
      })
    }
  }, [locationStatus])

  useEffect(() => {
    checkLocationPermission()
  }, [])

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        checkLocationPermission()
      }
    })

    return () => {
      subscription.remove()
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}
