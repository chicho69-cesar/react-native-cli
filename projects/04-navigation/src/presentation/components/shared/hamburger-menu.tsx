import { DrawerActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable } from 'react-native'
import { globalColors } from '../../../config/theme/theme'
import { IonIcon } from './ion-icon'

export default function HamburgerMenu() {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{ marginLeft: 5 }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <IonIcon name='menu-outline' color={globalColors.primary} />
        </Pressable>
      )
    })
  }, [])

  return (
    <></>
  )
}
