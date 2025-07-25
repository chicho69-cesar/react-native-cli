import React from 'react'
import { Alert } from 'react-native'

import { PromptAdapter } from '../../../config/adapters/prompt.adapter'
import { globalStyles } from '../../../config/theme/theme'
import Button from '../../components/ui/button'
import CustomView from '../../components/ui/custom-view'
import Separator from '../../components/ui/separator'
import Title from '../../components/ui/title'
import useTheme from '../../context/theme/use-theme'

export default function AlertScreen() {
  const { isDark } = useTheme()

  const createTwoButtonAlert = () => {
    Alert.alert(
      'Alert title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed')
        },
      ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light'
      },
    )
  }

  const createThreeButtonAlert = () => {
    Alert.alert(
      'Alert title',
      'My Alert Msg',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK pressed')
        },
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
          style: 'cancel'
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'destructive'
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('Alert dismissed'),
        userInterfaceStyle: isDark ? 'dark' : 'light'
      },
    )
  }

  // const showPrompt = () => {
  //   Alert.prompt(
  //     'Enter your name',
  //     'Please enter your name below:',
  //     [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel'
  //       },
  //       {
  //         text: 'OK',
  //         onPress: (name?: string) => console.log(`Name entered: ${name}`)
  //       }
  //     ],
  //     'plain-text',
  //     '',
  //     'Name'
  //   )
  // }

  const handleShowPrompt = () => {
    PromptAdapter.showPrompt({
      title: 'Enter your name',
      subTitle: 'Please enter your name below:',
      buttons: [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: (name?: string) => console.log(`Name entered: ${name}`)
        }
      ],
      placeholder: 'Name',
    })
  }

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text='Alertas' safe />

      <Button
        text='Alert - 2 botones'
        onPress={createTwoButtonAlert}
      />

      <Separator />

      <Button
        text='Alert - 3 botones'
        onPress={createThreeButtonAlert}
      />

      <Separator />

      {/* <Button
        text='Prompt - Input'
        onPress={showPrompt}
      /> */}

      <Button
        text='Prompt - Input'
        onPress={handleShowPrompt}
      />
    </CustomView>
  )
}
