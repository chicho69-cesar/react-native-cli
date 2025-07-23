import React from 'react'
import { Text, View } from 'react-native'

import { styles } from '../../config/theme/app-theme'
import { useCounterStore } from '../store/counter.store'
import { useProfileStore } from '../store/profile.store'

export default function HomeScreen() {
  const name = useProfileStore((state) => state.name)
  const email = useProfileStore((state) => state.email)
  const count = useCounterStore((state) => state.count)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>{count}</Text>
    </View>
  )
}
