import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../screens/home-screen'
import ProfileScreen from '../screens/profile-screen'
import SettingsScreen from '../screens/settings-screen'

const Tab = createBottomTabNavigator()

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='home' component={HomeScreen} />
      <Tab.Screen name='profile' component={ProfileScreen} />
      <Tab.Screen name='settings' component={SettingsScreen} />
    </Tab.Navigator>
  )
}