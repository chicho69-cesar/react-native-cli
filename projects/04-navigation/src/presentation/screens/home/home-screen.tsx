import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import { globalStyles } from '../../../config/theme/theme'
import HamburgerMenu from '../../components/shared/hamburger-menu'
import PrimaryButton from '../../components/shared/primary-button'
import { RootStackParams } from '../../routes/stack-navigator'

export default function HomeworkScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  /* useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Text>
            Menu
          </Text>
        </Pressable>
      )
    })
  }, []) */

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />

      <PrimaryButton
        title='Productos'
        onPress={() => navigation.navigate('products')}
      />

      <PrimaryButton
        title='Settings'
        onPress={() => navigation.navigate('settings')}
      />
    </View>
  )
}
