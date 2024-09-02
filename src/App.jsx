import { useState } from 'react'
import './App.css'
import counterLogo from './assets/counterLogo.svg'


function App() {
  const [count, setCount] = useState(0)



  const addNumber = () => {
    setCount(count + 1)
  }

  const subtractNumber = () => {
    setCount(count - 1)
  }

  const counterRestart = () => {
    setCount(0)
  }

  return (
    <div className="container">
      <div className='title'>
        <h1>Counter</h1> 
        <img className="counterSvg"src={counterLogo} alt="" />
      </div>
      <h2>{count}</h2>
      <div className="button-container"> 
        <button title='subtract number' onClick={subtractNumber}>-</button>
        <button title='reset counter'  onClick={counterRestart}>↻</button>
        <button title='add number'  onClick={addNumber}>+</button>
      </div>
    </div>
  )
}

export default App
