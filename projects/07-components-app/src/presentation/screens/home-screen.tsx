import React from 'react'
import { ScrollView, View } from 'react-native'
import CustomView from '../components/ui/custom-view'
import MenuItem from '../components/ui/menu-item'
import Title from '../components/ui/title'

const animationMenuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'animation-101-screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'animation-102-screen',
  },
]

export const menuItems = [
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'pull-to-refresh-screen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'custom-section-list-screen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'modal-screen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'infinite-scroll-screen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'slides-screen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'change-theme-screen',
  },
]

const uiMenuItems = [
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'switch-screen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'alert-screen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'text-input-screen',
  },
]

export default function HomeScreen() {
  return (
    <CustomView margin>
      <ScrollView>
        <Title text='Opciones del menú' safe />

        {animationMenuItems.map((item, index) => (
          <MenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === animationMenuItems.length - 1}
          />
        ))}

        <View style={{ marginTop: 30 }} />

        {uiMenuItems.map((item, index) => (
          <MenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === animationMenuItems.length - 1}
          />
        ))}

        <View style={{ marginTop: 30 }} />

        {menuItems.map((item, index) => (
          <MenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === animationMenuItems.length - 1}
          />
        ))}

        <View style={{ marginTop: 30 }} />
      </ScrollView>
    </CustomView>
  )
}
