import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'

import HamburgerMenu from '../components/shared/hamburger-menu'
import AboutScreen from '../screens/about/about-screen'
import ProfileScreen from '../screens/profile/profile-screen'

const TopTab = createMaterialTopTabNavigator()

export default function TopTabsNavigator() {
  return (
    <>
      <HamburgerMenu />

      <TopTab.Navigator>
        <TopTab.Screen
          name='profile'
          component={ProfileScreen}
        />

        <TopTab.Screen
          name='about'
          component={AboutScreen}
        />
      </TopTab.Navigator>
    </>
  )
}
