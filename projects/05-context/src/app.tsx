import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import BottomNavigator from './presentation/navigators/bottom-navigator'

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  )
}
