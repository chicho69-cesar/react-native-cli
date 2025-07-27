import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import useTheme from '../context/theme/use-theme'
import AlertScreen from '../screens/alerts/alert-screen'
import Animation101Screen from '../screens/animations/animation-101-screen'
import Animation102Screen from '../screens/animations/animation-102-screen'
import HomeScreen from '../screens/home-screen'
import TextInputsScreen from '../screens/inputs/text-inputs-screen'
import SwitchScreen from '../screens/switches/switch-screen'
import ChangeThemeScreen from '../screens/theme/change-theme-screen'
import CustomSectionListScreen from '../screens/ui/custom-section-list-screen'
import InfiniteScrollScreen from '../screens/ui/infinite-scroll-screen'
import ModalScreen from '../screens/ui/modal-screen'
import PullToRefreshScreen from '../screens/ui/pull-to-refresh-screen'
import SlideScreen from '../screens/ui/slide-screen'

const Stack = createStackNavigator()

export default function Navigator() {
  const { colors } = useTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.background
        },
      }}
    >
      <Stack.Screen name='home-screen' component={HomeScreen} />
      <Stack.Screen name='animation-101-screen' component={Animation101Screen} />
      <Stack.Screen name='animation-102-screen' component={Animation102Screen} />
      <Stack.Screen name='switch-screen' component={SwitchScreen} />
      <Stack.Screen name='alert-screen' component={AlertScreen} />
      <Stack.Screen name='text-inputs-screen' component={TextInputsScreen} />
      <Stack.Screen name='pull-to-refresh-screen' component={PullToRefreshScreen} />
      <Stack.Screen name='custom-section-list-screen' component={CustomSectionListScreen} />
      <Stack.Screen name='modal-screen' component={ModalScreen} />
      <Stack.Screen name='infinite-scroll-screen' component={InfiniteScrollScreen} />
      <Stack.Screen name='slides-screen' component={SlideScreen} />
      <Stack.Screen name='change-theme-screen' component={ChangeThemeScreen} />
    </Stack.Navigator>
  )
}
