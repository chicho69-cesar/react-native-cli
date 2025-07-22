import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import { useWindowDimensions } from 'react-native'
import { globalColors } from '../../config/theme/theme'
import CustomDrawerContent from '../components/drawer/custom-drawer-content'
import { IonIcon } from '../components/shared/ion-icon'
import ProfileScreen from '../screens/profile/profile-screen'
import BottomTabsNavigator from './bottom-tabs-navigator'

const Drawer = createDrawerNavigator()

export default function SideMenuNavigator() {
  const dimensions = useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20
        }
      }}
    >
      {/* <Drawer.Screen
        name='stack-navigator'
        component={StackNavigator}
      /> */}

      <Drawer.Screen
        name='tabs'
        component={BottomTabsNavigator}
        options={{ drawerIcon: ({ color }) => <IonIcon name='bonfire-outline' color={color} /> }}
      />

      <Drawer.Screen
        name='profile'
        component={ProfileScreen}
        options={{ drawerIcon: ({ color }) => <IonIcon name='person-circle-outline' color={color} /> }}
      />
    </Drawer.Navigator>
  )
}