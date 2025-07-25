import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native'

import { globalStyles } from '../../../config/theme/theme'
import Card from '../../components/ui/card'
import CustomView from '../../components/ui/custom-view'
import Title from '../../components/ui/title'

export default function TextInputsScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <CustomView margin>
        <Title text='Text Inputs' safe />

        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder='Nombre completo'
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />

          <TextInput
            style={globalStyles.input}
            placeholder='Correo electrónico'
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            // keyboardAppearance='dark'
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <TextInput
            style={globalStyles.input}
            placeholder='Número de teléfono'
            keyboardType='phone-pad'
            onChangeText={(value) => setForm({ ...form, phone: value })}
          />
        </Card>

        <View style={{ height: 10 }} />

        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>

        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder='Segundo número de teléfono'
            keyboardType='phone-pad'
            onChangeText={(value) => setForm({ ...form, phone: value })}
          />
        </Card>
      </CustomView>
    </KeyboardAvoidingView>
  )
}
