import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/TodoSlice'

function Todos() {
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const editTodo= (todo)=>{
      updateTodo(todo.id)
      setIsTodoEditable(false)
    }
    
    const todos= useSelector(state=> state.todos)
    const dispatch= useDispatch()
  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
  {todos.map((todo) => (
    <li
      className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
      key={todo.id}
    >
      <div className='text-white'>{todo.text}</div>
      <div>
        <button
          onClick={() => {
            
            if(isTodoEditable)
              editTodo(todo);
            else
              setIsTodoEditable(prev=>!prev)
            }
          }
          className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
        >
          {isTodoEditable ? '💾' : '✏️'}
        </button>
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md ml-2"
        >
          ❌
        </button>
      </div>
    </li>
  ))}
</ul>
    </>
  )
}

export default Todos
