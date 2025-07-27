import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

import ThemeProvider from './presentation/context/theme/theme-provider'
import Navigator from './presentation/navigation/navigator'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
