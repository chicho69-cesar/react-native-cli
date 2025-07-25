import { createContext } from 'react'
import { ThemeColors } from '../../../config/theme/theme'

export type ThemeColor = 'light' | 'dark'

export interface ThemeContextProps {
  currentTheme: ThemeColor
  colors: ThemeColors
  isDark: boolean
  setTheme: (theme: ThemeColor) => void
}

export const ThemeContext = createContext({} as ThemeContextProps)
