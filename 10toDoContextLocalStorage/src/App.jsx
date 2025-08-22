import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider } from './contexts'
import { ToDoForm, ToDoItem } from './components'

function App() {
  const [toDos, setToDos] = useState([]) 

  const addToDo = (toDo) => {
    setToDos((prev) => [{ id: Date.now(), ...toDo }, ...prev])
  }

  const updateToDo = (id, toDo) => {
    setToDos((prev) => prev.map(prevToDo => (prevToDo.id === id ? toDo : prevToDo)))
  }
  const deleteToDo = (id) => {
    setToDos((prev) => prev.filter(prevToDo => prevToDo.id !== id))
  }
  const toggleComplete = (id) => {
    setToDos((prev) => prev.map(prevToDo => (prevToDo.id === id ? {...prevToDo, completed: !prevToDo.completed} : prevToDo)))
  }

  useEffect(()=>{
    const todos= JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0)
    {
      setToDos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(toDos))
  },[toDos])

  return (
    <ToDoProvider value={{ toDos, addToDo, updateToDo, deleteToDo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <ToDoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {toDos.map((toDo)=>(
              <div key= {toDo.id}><ToDoItem toDo={toDo}/></div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
