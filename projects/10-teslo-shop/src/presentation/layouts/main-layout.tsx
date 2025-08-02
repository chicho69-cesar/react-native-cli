import { useNavigation } from '@react-navigation/native'
import { Divider, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import React, { PropsWithChildren } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MyIcon from '../components/ui/my-icon'

interface MainLayoutProps extends PropsWithChildren {
  title: string
  subtitle?: string

  rightAction?: () => void
  rightActionIcon?: string
}

export default function MainLayout({
  title,
  subtitle,
  rightAction,
  rightActionIcon,
  children,
}: MainLayoutProps) {
  const { top } = useSafeAreaInsets()
  const { canGoBack, goBack } = useNavigation()

  const RenderBackAction = () => (
    <TopNavigationAction
      icon={<MyIcon name='arrow-back-outline' />}
      onPress={goBack}
    />
  )

  const RenderRightAction = () => {
    if (rightAction === undefined || rightActionIcon === undefined) return null

    return (
      <TopNavigationAction
        onPress={rightAction}
        icon={<MyIcon name={rightActionIcon} />}
      />
    )
  }

  return (
    <Layout style={{ paddingTop: top }}>
      <TopNavigation
        title={title}
        subtitle={subtitle}
        alignment='center'
        accessoryLeft={canGoBack() ? RenderBackAction : undefined}
        accessoryRight={() => <RenderRightAction />}
      />

      <Divider />

      <Layout style={{ height: '100%' }}>
        {children}
      </Layout>
    </Layout>
  )
}
