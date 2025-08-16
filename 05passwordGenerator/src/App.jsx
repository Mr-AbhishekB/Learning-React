import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (num) str += "1234567890"
    if (character) str += "~!@#$%^&*()_+}{[]-="

    for (let i = 1; i <= length; i++) {
      let randomIdx = Math.floor(Math.random() * str.length)
      pass += str[randomIdx]
    }
    setPassword(pass)
  }, [length, num, character])

  const copyPass= useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  const passRef= useRef(null);

  useEffect(()=>{
    passGen()
  },[length,num,character,passGen])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 '>
        <h1 className='text-4xl text-center text-white mb-5'>Password Generator</h1>
        <div className='flex rounded-lg shadow overflow-hidden mb-4 bg-white'>
          <input type="text"
            placeholder='Password'
            className='outline-none w-full py-1 px-3'
            value={password}
            readOnly
            ref={passRef}
          />
          <button className='px-5 bg-blue-400 outline-none text-white'
          onClick={copyPass}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-5'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='curson-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={num}
            id="numberInput"
            onChange={()=> setNum((prev)=>!prev)}
            /> 
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={character}
            id="charInput"
            onChange={()=> setCharacter((prev)=>!prev)}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
