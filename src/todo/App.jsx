import React, { useState } from 'react'
import Input from './Input'
import List from './List'


const App = () =>{
    const [todos,setTodos] = useState([]);
    const [todo, setTodo] = useState('')
    const [editTodo, setEditTodo]=useState(null)
    console.log(editTodo)
    console.log(todos)

    return(
        <div>
            <Input todos = {todos} setTodos = {setTodos} todo={todo} setTodo={setTodo} editTodo={editTodo} setEditTodo={setEditTodo}/>
            <List todos={todos} setTodos={setTodos} setTodo={setTodo} setEditTodo={setEditTodo}/>
        </div>
    )
}

export default App;