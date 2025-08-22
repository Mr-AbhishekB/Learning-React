import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    toDos: [{
        id: 1,
        toDoMessage: "ToDo message",
        completed: false
    }],
    addToDo: (toDo)=> {},
    updateToDo: (id,toDo)=> {},
    deleteToDo: (id)=> {},
    toggleComplete: (id)=> {}
})

export const ToDoProvider= ToDoContext.Provider

export const useToDo=()=>{
    return useContext(ToDoContext)
}