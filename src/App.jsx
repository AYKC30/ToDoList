//! todoList
import React from 'react'
import { useState } from 'react'
import "./Global.css"
const App = () => {
  let [todos, setTodos] = useState([])
  let [newTodo, setNewTodo] = useState("");
  let addTodo = ()=>{
    if(newTodo.trim()!==""){
      setTodos([...todos, {text:newTodo, completed:false}])
    }
  }
    let deletedTodo = (index)=>{
      let updatedTodos = [...todos];
      updatedTodos.splice(index, 1)
      setTodos(updatedTodos)
    }
    let toggleTodo = (index)=>{
      let updatedTodos = [...todos]
      updatedTodos[index].completed =! updatedTodos[index].completed;
      setTodos(updatedTodos)
    }
  
  return (
    <div>
    <h1>Todo Application</h1>
    <input type="text" 
    placeholder='Enter your task'
    value={newTodo}
    onChange={(e)=>setNewTodo(e.target.value)}
    />
    <button onClick={addTodo}>Add Task</button>
    <ul>
      {todos.map((todo, index)=>{
        return(<>
        <li key={index}>
          <span style={{textDecoration:todo.completed? "line-through":"none"}}>{todo.text}</span>
          <button onClick={()=>toggleTodo(index)}>{todo.completed?"Uncheck":"check"}</button>
          <button onClick={()=>deletedTodo(index)}>DeleteTodo</button>
        </li>
        </>)
      })}
    </ul>
    </div>
  )
    }


export default App
