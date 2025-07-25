import React, { useState } from 'react'
import { Modal, Platform, View } from 'react-native'

import Button from '../../components/ui/button'
import CustomView from '../../components/ui/custom-view'
import Title from '../../components/ui/title'
import useTheme from '../../context/theme/use-theme'

export default function ModalScreen() {
  const [isVisible, setIsVisible] = useState(false)
  const { colors } = useTheme()

  return (
    <CustomView margin>
      <Title text='Modal Screen' safe />

      <Button
        text='Show Modal'
        onPress={() => setIsVisible(true)}
      />

      <Modal visible={isVisible} animationType='slide'>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.background,
          }}>

          <View style={{ paddingHorizontal: 10 }}>
            <Title text='Modal Content' safe />
          </View>

          <View style={{ flex: 1 }} />

          <Button
            text='Cerrar Modal'
            onPress={() => setIsVisible(false)}
            style={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0,
            }}
          />
        </View>
      </Modal>
    </CustomView>
  )
}
