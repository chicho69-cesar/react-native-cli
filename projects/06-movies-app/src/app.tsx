import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AppNavigation from './presentation/navigation/app-navigation'

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  )
}
