import { useState,useEffect } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{fetch('http://localhost:3000/todos').then((res)=>{ ///useEffect: used to defend the render infinite times it only render when its changes
    res.json().then((data)=>{
      setTodos(data.todos);
      console.log(data.todos);
    })
  })},[])

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
