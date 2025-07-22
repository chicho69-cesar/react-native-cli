import React from 'react'
import { View } from 'react-native'
import HamburgerMenu from '../../components/shared/hamburger-menu'
import { IonIcon } from '../../components/shared/ion-icon'

export default function Tabs1Screen() {
  return (
    <View>
      <HamburgerMenu />
      {/* <Ionicons name='rocket-outline' size={100} /> */}
      <IonIcon name='rocket-outline' />
    </View>
  )
}
