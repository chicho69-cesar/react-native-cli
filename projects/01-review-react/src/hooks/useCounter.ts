import { useState } from 'react'

interface UseCounterProps {
  initialValue?: number
}

export function useCounter({ initialValue = 0 }: UseCounterProps) {
  const [counter, setCounter] = useState(initialValue)

  const increaseBy = (value: number) => {
    const newValue = counter + value
    if (newValue < 0) return
    setCounter(newValue)
  }

  const decreaseBy = (value: number) => {
    const newValue = counter - value
    if (newValue < 0) return
    setCounter(newValue)
  }

  const reset = () => {
    setCounter(initialValue)
  }

  return {
    counter,

    increaseBy,
    decreaseBy,
    reset
  }
}
