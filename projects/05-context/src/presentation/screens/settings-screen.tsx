import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'

import { styles } from '../../config/theme/app-theme'
import { useCounterStore } from '../store/counter.store'

export default function SettingsScreen() {
  const navigation = useNavigation()

  const count = useCounterStore((state) => state.count)
  const incrementBy = useCounterStore((state) => state.incrementBy)

  useEffect(() => {
    navigation.setOptions({
      title: `Counter: ${count}`
    })
  }, [count, navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Count: {count}
      </Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => incrementBy(-1)}
      >
        <Text>-1</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => incrementBy(1)}
      >
        <Text>+1</Text>
      </Pressable>
    </View>
  )
}
