import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import { createContext } from 'react'
import { adaptNavigationTheme } from 'react-native-paper'

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
})

export const ThemeContext = createContext({
  isDark: false,
  light: LightTheme,
  dark: DarkTheme,
  theme: LightTheme,
})
