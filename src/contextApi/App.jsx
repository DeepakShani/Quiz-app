import React from 'react'
import CounterProvider from './Context'
import Counter from './Counter'
import { reducer } from '../UseReducer/reducer'
 
const App = () => {
  return (
    <div>
      <CounterProvider>
        <Counter/>
      </CounterProvider>
      
    </div>
  )
}

export default App
