import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import { PropsWithChildren } from 'react'
import { useColorScheme } from 'react-native'
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper'

import { ThemeContext } from './theme-context'

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
})

export default function ThemeProvider({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme()

  const isDark = colorScheme === 'dark'
  const theme = isDark ? DarkTheme : LightTheme

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <ThemeContext.Provider
          value={{
            isDark,
            light: LightTheme,
            dark: DarkTheme,
            theme,
          }}
        >
          {children}
        </ThemeContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  )
}
