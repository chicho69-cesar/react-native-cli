import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import Tabs1Screen from '../screens/tabs/tabs1-screen'
// import Tabs2Screen from '../screens/tabs/tabs2-screen'
// import Tabs3Screen from '../screens/tabs/tabs3-screen'
import { IonIcon } from '../components/shared/ion-icon'
import StackNavigator from './stack-navigator'
import TopTabsNavigator from './top-tabs-navigator'

const Tab = createBottomTabNavigator()

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='tab1'
        options={{
          title: 'Tab 1',
          tabBarIcon: ({ color }) => <IonIcon name='accessibility-outline' color={color} />,
        }}
        component={Tabs1Screen}
      />

      <Tab.Screen
        name='tab2'
        options={{
          title: 'Tab 2',
          tabBarIcon: ({ color }) => <IonIcon name='airplane-outline' color={color} />,
        }}
        component={TopTabsNavigator}
      />

      <Tab.Screen
        name='tab3'
        options={{
          title: 'Tab 3',
          tabBarIcon: ({ color }) => <IonIcon name='bar-chart-outline' color={color} />,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  )
}
