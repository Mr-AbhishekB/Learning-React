import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0)

  const addValue= ()=>{
    if(counter!=20)
    {
      setCounter(counter+1) 
    }
    else{
      alert("Counter connot be more than 20")
      console.log("Counter cannot be more than 20")
    }
  }

  const removeValue= ()=>{
    if(counter!=0)
      setCounter(counter-1)
    else{
      alert("Counter cannot be less than 0")
      console.log("Counter cannot be less than 0")
    }
  }
  
  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter value: {counter}</h2>

    <button
      onClick={addValue}
      disabled={counter === 20}
    >Increase</button>
    <br />
    <button
      onClick={removeValue} 
      disabled={counter === 0}
    >Decrease</button>
    </>
  )
}

export default App
