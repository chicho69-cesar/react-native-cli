import React from 'react'
import FadeInImage from '../ui/fade-in-image'

interface ListItemProps {
  number: number
}

export default function InfiniteScrollItem({ number }: ListItemProps) {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: '100%',
      }}
    />
  )
}
