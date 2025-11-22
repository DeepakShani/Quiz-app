import {useState} from 'react'

 const counter = () => {
    const [count,setCount] = useState(0);
    const [text,setText]=useState(null)
    
  return (
    <div>
        <input type="text" onChange={(e)=>{
            setText(e.target.value)
        }}/>
      <button onClick={()=>{
        setCount(parseInt(text));
        setText('')
      }}>Add</button>

      <button onClick={()=>{
        setCount(count++)
      }}>+</button>

      <span>{count}</span>
      
      <button onClick={()=>{
        if(count>0){
            setCount(count-1);
        }
      }}>-</button>
    </div>
  )
}

export default counter 