import React from 'react'

const List = ({todos,dispatch}) => {
  return (
    <div>
      <ul>
        {
            todos.map((ele)=>{
                return <li key={ele.id}>{ele.text}
                    <button onClick={()=>{
                      dispatch({
                        type : "DEL",
                        payload : ele.id
                      })
                    }}>delete</button></li>
            })
        }
      </ul>
    </div>
  )
}

export default List
