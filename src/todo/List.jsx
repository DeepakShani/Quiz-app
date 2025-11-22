import React from 'react'


const List = ({todos,setTodos,setTodo,setEditTodo}) => {
  return (
    <ul>
        {
          todos.map((ele)=>{
            return <li key={ele.id}>{ele.text}
            <button onClick={()=>{
              let filterData = todos.filter((todo)=>{
                return ele.id != todo.id
              })
              setTodos(filterData)
            }}>delete</button>
            <button onClick={()=>{
              setTodo(ele.text)
              setEditTodo(ele.id)
            }}>edit</button>
            </li>
            
          })
        }
    </ul>
  )
}

export default List;


