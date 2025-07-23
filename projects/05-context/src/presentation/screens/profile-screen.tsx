import React from 'react'
import { Pressable, Text, View } from 'react-native'

import { styles } from '../../config/theme/app-theme'
import { useProfileStore } from '../store/profile.store'

export default function ProfileScreen() {
  const name = useProfileStore((state) => state.name)
  const email = useProfileStore((state) => state.email)
  const changeProfile = useProfileStore((state) => state.changeProfile)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({ name: 'Cesar' })}
      >
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({ email: 'cesar@google.com' })}
      >
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('Cesar Villalobos', 'cesar@gmail.com')}
      >
        <Text>Cambiar credenciales</Text>
      </Pressable>
    </View>
  )
}
