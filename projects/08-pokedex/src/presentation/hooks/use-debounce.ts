import { useEffect, useState } from 'react'

export default function useDebounce<T>(ms: number, value: T): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, ms)

    return () => {
      clearTimeout(timeout)
    }
  }, [value, ms])

  return debouncedValue
}
