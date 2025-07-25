import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'

import ThemeProvider from './presentation/context/theme/theme-provider'
import useTheme from './presentation/context/theme/use-theme'
import Navigator from './presentation/navigation/navigator'

function Navigation() {
  const { isDark } = useTheme()

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Navigator />
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  )
}
