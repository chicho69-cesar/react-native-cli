import React, { useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'

import { colors } from '../../../config/theme/theme'
import InfiniteScrollItem from '../../components/infinite-scroll/infinite-scroll-item'

export default function InfiniteScrollScreen() {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i)

    setTimeout(() => {
      setNumbers([...numbers, ...newArray])
    }, 3000)
  }

  return (
    <View style={{ backgroundColor: 'black' }}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        renderItem={({ item }) => <InfiniteScrollItem number={item} />}
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  )
}
