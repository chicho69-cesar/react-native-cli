import Ionicons from '@react-native-vector-icons/ionicons'

interface Props {
  name: string | any
  size?: number
  color?: string
}

export const IonIcon = ({ name, size = 25, color = 'black' }: Props) => {
  return (
    <Ionicons
      name={name}
      size={size}
      color={color}
    />
  )
}
