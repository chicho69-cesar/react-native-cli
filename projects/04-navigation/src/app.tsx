import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import SideMenuNavigator from './presentation/routes/side-menu-navigator'

export default function App() {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
    </NavigationContainer>
  )
}
