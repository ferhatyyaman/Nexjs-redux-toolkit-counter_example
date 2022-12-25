import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { increment,decrement,incrementByAmount } from '../store/counterSlice'
import { useDispatch } from 'react-redux'

export default function Counter() { 
  const count=useSelector(state=>state.counter.value)
  const dispatch=useDispatch()
  return (
    <div>
        <h1>counter</h1>
        <p>{count}</p>
        <button onClick={()=>dispatch(decrement())}>azalt -</button>
        <button onClick={()=>dispatch(increment())}>arttır +</button>
        <button onClick={()=>dispatch(incrementByAmount(4))}>4 arttır +</button>
        <button onClick={()=>dispatch(incrementByAmount(-4))}>4 azalt -</button>
    </div>
  )
}
