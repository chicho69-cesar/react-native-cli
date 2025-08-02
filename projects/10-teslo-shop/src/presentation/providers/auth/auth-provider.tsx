import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { PropsWithChildren, useEffect } from 'react'

import useAuth from '../../hooks/auth/use-auth'
import { RootStackParams } from '../../navigation/navigator'

export default function AuthProvider({ children }: PropsWithChildren) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()
  const { status, checkStatus } = useAuth()

  useEffect(() => {
    checkStatus()
  }, [])

  useEffect(() => {
    if (status === 'checking') {
      return
    }

    if (status === 'authenticated') {
      navigation.reset({
        index: 0,
        routes: [{ name: 'home' }],
      })
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: 'login' }],
      })
    }
  }, [status])

  return (
    <>
      {children}
    </>
  )
}
