import React,{useReducer, useState} from 'react'
import List from './List'
import { reducer, initialState} from './reducer'
const App = () => {
    const [state,dispatch]= useReducer(reducer,initialState)
    const [todo,setTodo]=useState('')
  return (
    <div>
      <input value={todo} onChange={(e)=>{
        setTodo(e.target.value.trim().replace(/\s+/g," "))
      }} type="text"/>
      <button onClick={()=>{
        dispatch({
            type:"ADD",
            payload:todo,
        })
        setTodo('')
        setEditId(null)
      }}>Add</button>
      
      <List todos={state} dispatch = {dispatch} setTodo= {setTodo} setEditId={setEditId}/>
    </div>
  )
}

export default App
