import React, { useReducer } from 'react';
import { initialState } from './initialState';
import {reducer} from './reducer';

const App = () => {
const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <h1>{state.name}</h1>
      <button onClick={()=>{
        dispatch({
          type:"SUB",
        })
      }}>-</button>
      <span>{state.count}</span>
      <button onClick={()=>{
        dispatch({
          type:"ADD",
        })
      }}>+</button>
    </div>
  )
}

export default App
