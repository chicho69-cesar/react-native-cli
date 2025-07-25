import React, { PropsWithChildren, useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'
import { darkColors, lightColors } from '../../../config/theme/theme'
import { ThemeColor, ThemeContext } from './theme-context'

export default function ThemeProvider({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme()
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light')

  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark')
    } else {
      setCurrentTheme('light')
    }
  }, [colorScheme])

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme)
  }

  const isDark = currentTheme === 'dark'
  const colors = isDark ? darkColors : lightColors

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        isDark,
        colors,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}