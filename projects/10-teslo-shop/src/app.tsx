import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import React from 'react'
import { useColorScheme } from 'react-native'

import Navigator from './presentation/navigation/navigator'
import AuthProvider from './presentation/providers/auth/auth-provider'

const queryClient = new QueryClient()

export default function ProductsApp() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? eva.dark : eva.light

  const backgroundColor = colorScheme === 'dark'
    ? theme['color-basic-800']
    : theme['color-basic-100']

  return (
    <QueryClientProvider client={queryClient}>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer
          theme={{
            dark: colorScheme === 'dark',
            colors: {
              primary: theme['color-primary-500'],
              background: backgroundColor,
              card: theme['color-basic-100'],
              text: theme['text-basic-color'],
              border: theme['color-basic-800'],
              notification: theme['color-primary-500'],
            },
            fonts: {
              regular: theme['font-family'],
              medium: theme['font-family-medium'],
              bold: theme['font-family-bold'],
              heavy: theme['font-family-heavy'],
            }
          }}
        >
          <AuthProvider>
            <Navigator />
          </AuthProvider>
        </NavigationContainer>
      </ApplicationProvider>
    </QueryClientProvider>
  )
}
