import Ionicons from '@react-native-vector-icons/ionicons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import useTheme from '../../context/theme/use-theme'

interface MenuItemProps {
  name: string
  icon: string
  component: string

  isFirst?: boolean
  isLast?: boolean
}

export default function MenuItem({
  component,
  icon,
  name,
  isFirst = false,
  isLast = false
}: MenuItemProps) {
  const navigation = useNavigation<any>()
  const { colors } = useTheme()

  return (
    <Pressable onPress={() => navigation.navigate(component)}>
      <View style={{
        ...styles.container,
        backgroundColor: colors.cardBackground,
        ...(isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10 }),
        ...(isLast && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingBottom: 10 }),

      }}>
        <Ionicons name={icon as any} size={25} style={{ marginRight: 10 }} color={colors.primary} />
        <Text style={{ color: colors.text }}>{name}</Text>
        <Ionicons name='chevron-forward-outline' size={25} style={{ marginLeft: 'auto', color: colors.primary }} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5
  }
})
