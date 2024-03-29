
import React from 'react'
import { useCounterStore } from '../../app/zustand'
const Zustand = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <div>
      zustand
      <span>{count}</span>
      <button onClick={() => increment()}>ADD</button>
      <button onClick={() => decrement()}>REMOVE</button>
      <button onClick={() => reset()}>RESET</button>
    </div>
  )
}

export default Zustand;
