import React, {useState} from 'react'

const Input = ({setTodos,todos,todo,setTodo,editTodo,setEditTodo}) => {
    
    // console.log(todo)

    return(
        <div>
            <input value={todo} onChange={(e)=>{
                setTodo(e.target.value.trim().replace(/\s+/g," "))
            }} type="text" />

            <button onClick={()=>{
                // setTodos([...todos,{id:Date.now(),text:todo}])
                // setTodo('')
                if(editTodo){
                    let updatedTodos=todos.map((ele)=>{
                       return ele.id == editTodo?{...ele,text:todo}:ele;
                    })
                    setTodos(updatedTodos);
                    setTodo('')
                    setEditTodo(null)
                }
                else{
                    setTodos([...todos,{id:Date.now(),text:todo}])
                    setTodo('')
                }
            }}>{
                editTodo?"Update":"Add"
            }</button>
            <button onClick={()=>{
                setTodos([])
                setTodo('')
                setEditTodo(null)
            }}>Reset</button>
        </div>
    )
}

export default Input