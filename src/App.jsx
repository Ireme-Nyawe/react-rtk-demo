import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CakeView from './features/cake/CakeView'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CakeView/>
    </>
  )
}

export default App
