import { useCounter } from '../hooks/useCounter'

export default function CounterWithHook() {
  const { counter, increaseBy } = useCounter({
    initialValue: 5
  })

  return (
    <>
      <h3>Contador: <small>{counter}</small></h3>

      <div>
        <button onClick={() => increaseBy(+1)}>+1</button>
        &nbsp;
        <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  )
}
