import React, { useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { globalStyles } from '../../../config/theme/theme'
import Title from '../../components/ui/title'
import useTheme from '../../context/theme/use-theme'

export default function PullToRefreshScreen() {
  const { colors } = useTheme()
  const { top } = useSafeAreaInsets()
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)

    setTimeout(() => {
      setIsRefreshing(false)
    }, 3000)
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'green', 'blue']}
          progressBackgroundColor={colors.cardBackground}
          tintColor={colors.primary}
          onRefresh={handleRefresh}
        />
      }
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}
    >
      <Title text='Pull to Refresh' safe />
    </ScrollView>
  )
}
