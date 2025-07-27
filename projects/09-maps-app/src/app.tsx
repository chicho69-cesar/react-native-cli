import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Navigator from './presentation/navigation/navigator'
import PermissionsChecker from './presentation/providers/permissions-checker'

export default function App() {
  return (
    <NavigationContainer>
      <PermissionsChecker>
        <Navigator />
      </PermissionsChecker>
    </NavigationContainer>
  )
}
