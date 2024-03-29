import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'
import Zustand from './features/zustand'

function App() {
  return (
    <div className="App">
      <Counter />
      <Zustand/>
    </div>
  )
}

export default App
