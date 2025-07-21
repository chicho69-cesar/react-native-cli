import { useEffect, useRef, useState } from 'react'

export enum Operator {
  add = '+',
  subtract = '-',
  multiply = '×',
  divide = '÷',
}

export default function useCalculator() {
  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')
  const [formula, setFormula] = useState('')

  const operator = useRef<Operator>(undefined)

  useEffect(() => {
    if (operator.current) {
      const firstFormulaPart = formula.split(' ').at(0)
      setFormula(`${firstFormulaPart} ${operator.current} ${number}`)
    } else {
      setFormula(number)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number])

  useEffect(() => {
    const subResult = calculateSubResult()
    setPrevNumber(`${subResult}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formula])

  const buildNumber = (text: string) => {
    if (number.includes('.') && text === '.') return

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (text === '0' && !number.includes('.')) return

      if (text === '.') {
        return setNumber(number + text)
      }

      if (text === '0' && number.includes('.')) {
        return setNumber(number + text)
      }

      if (text !== '0' && !number.includes('.')) {
        return setNumber(text)
      }

      return setNumber(number + text)
    }

    setNumber(number + text)
  }

  const clean = () => {
    setNumber('0')
    setPrevNumber('0')
    operator.current = undefined
    setFormula('')
  }

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''))
    }

    setNumber('-' + number)
  }

  const deleteOperation = () => {
    let currentSign = ''
    let currentNumber = number

    if (number.includes('-')) {
      currentSign = '-'
      currentNumber = number.substring(1)
    }

    if (currentNumber.length > 1) {
      return setNumber(currentSign + currentNumber.slice(0, -1))
    }

    setNumber('0')
  }

  const setLastNumber = () => {
    calculateResult()

    if (number.endsWith(',')) {
      setPrevNumber(number.slice(0, -1))
    } else {
      setPrevNumber(number)
    }

    setNumber('0')
  }

  const operation = (op: Operator) => {
    setLastNumber()
    operator.current = op
  }

  const calculateResult = () => {
    const result = calculateSubResult()
    setFormula(`${result}`)
    operator.current = undefined
    setPrevNumber('0')
  }

  const calculateSubResult = () => {
    const [firstValue, operationType, secondValue] = formula.split(' ')

    const value1 = Number(firstValue)
    const value2 = Number(secondValue)

    if (isNaN(value2)) return value1

    switch (operationType) {
      case Operator.add:
        return value1 + value2

      case Operator.subtract:
        return value1 - value2

      case Operator.multiply:
        return value1 * value2

      case Operator.divide:
        return value2 === 0
          ? 0
          : value1 / value2

      default:
        throw new Error(`Unknown operator: ${operator.current}`)
    }
  }

  return {
    number,
    prevNumber,
    formula,

    buildNumber,
    clean,
    toggleSign,
    deleteOperation,
    operation,
    calculateResult,
  }
}
