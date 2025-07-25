import React, { useState } from 'react'
import Card from '../../components/ui/card'
import CustomSwitch from '../../components/ui/custom-switch'
import CustomView from '../../components/ui/custom-view'
import Separator from '../../components/ui/separator'
import Title from '../../components/ui/title'

export default function SwitchScreen() {
  // const [isEnabled, setIsEnabled] = useState(false)
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })

  return (
    <CustomView style={{ paddingHorizontal: 10 }}>
      <Title text='Switches' safe />

      <Card>
        <CustomSwitch
          isOn={state.isActive}
          text='¿Está activo?'
          onChange={(value) => setState({ ...state, isActive: value })}
        />

        <Separator />

        <CustomSwitch
          isOn={state.isHungry}
          text='¿Tiene hambre?'
          onChange={(value) => setState({ ...state, isHungry: value })}
        />

        <Separator />

        <CustomSwitch
          isOn={state.isHappy}
          text='¿Está feliz?'
          onChange={(value) => setState({ ...state, isHappy: value })}
        />
      </Card>
    </CustomView>
  )
}
