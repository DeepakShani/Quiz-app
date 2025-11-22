import React,{useContext} from 'react'
import { CounterContext } from './Context'
import { useReducer } from 'react'
import { reducer } from '../UseReducer/reducer'
import { initialState } from '../UseReducer/initialState'

const Counter = () => {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <h1>{state.name}</h1>
      <button onClick={()=>{
        dispatch({
            type:"SUB"
        })}}>-</button>

      <span>{state.count}</span>

      <button onClick={()=>{
        dispatch({
          type:"ADD"
        })
      }}>+</button>
    </div>
  )
}

export default Counter
