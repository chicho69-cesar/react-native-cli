import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { globalColors } from '../../../config/theme/theme'

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView>
      <View style={styles.decoration} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  decoration: {
    height: 200,
    backgroundColor: globalColors.primary,
    margin: 30,
    borderRadius: 50
  }
})
