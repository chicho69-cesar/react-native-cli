import { StackScreenProps } from '@react-navigation/stack'
import { Button, Input, Layout, Text } from '@ui-kitten/components'
import React, { useState } from 'react'
import { Alert, useWindowDimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import MyIcon from '../../components/ui/my-icon'
import useAuth from '../../hooks/auth/use-auth'
import { RootStackParams } from '../../navigation/navigator'

interface LoginScreenProps extends StackScreenProps<RootStackParams, 'login'> { }

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const { height } = useWindowDimensions()
  const { login } = useAuth()

  const [isPosting, setIsPosting] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async () => {
    if (form.email.length === 0 || form.password.length === 0) {
      return
    }

    setIsPosting(true)
    const loginWasSuccessful = await login(form.email, form.password)
    setIsPosting(false)

    if (loginWasSuccessful) {
      return
    }

    Alert.alert(
      'Error',
      'El correo electrónico o la contraseña son incorrectos',
    )
  }

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.35 }}>
          <Text category='h1'>Ingresar</Text>
          <Text category='p2'>Por favor, ingrese para continuar</Text>
        </Layout>

        <Layout style={{ marginTop: 20 }}>
          <Input
            placeholder='Correo electrónico'
            keyboardType='email-address'
            autoCapitalize='none'
            accessoryLeft={<MyIcon name='email-outline' />}
            style={{ marginBottom: 10 }}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <Input
            placeholder='Contraseña'
            autoCapitalize='none'
            secureTextEntry
            accessoryLeft={<MyIcon name='lock-outline' />}
            style={{ marginBottom: 10 }}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </Layout>

        <Layout style={{ height: 10 }} />

        <Layout>
          <Button
            disabled={isPosting}
            accessoryRight={<MyIcon name='arrow-forward-outline' />}
            onPress={handleLogin}
          >
            Ingresar
          </Button>
        </Layout>

        <Layout style={{ height: 50 }} />

        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Text>¿No tienes cuenta?</Text>

          <Text
            status='primary'
            category='s1'
            onPress={() => navigation.navigate('register')}
          >
            {' '}
            crea una{' '}
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  )
}
