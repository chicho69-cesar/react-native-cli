import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { FlatList, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, View } from 'react-native'

import SlideItem from '../../components/slides/slide-item'
import Button from '../../components/ui/button'
import useTheme from '../../context/theme/use-theme'

interface Slide {
  title: string
  desc: string
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
]

export default function SlideScreen() {
  const navigation = useNavigation()
  const flatListRef = useRef<FlatList>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const { colors } = useTheme()

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width)
    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0)
  }

  const handleScrollToSlide = (index: number) => {
    if (!flatListRef.current) return
    flatListRef.current.scrollToIndex({ index, animated: true })
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <SlideItem slide={item} />
        )}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        onScroll={handleScroll}
      />

      {currentSlideIndex === items.length - 1 ? (
        <Button
          text='Finalizar'
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', bottom: 60, right: 30, width: 100 }}
        />
      ) : (
        <Button
          text='Siguiente'
          onPress={() => handleScrollToSlide(currentSlideIndex + 1)}
          style={{ position: 'absolute', bottom: 60, right: 30, width: 100 }}
        />
      )}
    </View>
  )
}
