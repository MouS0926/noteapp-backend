import React, { useState } from 'react'

export default function Counter() {
const [counter,setCounter]=useState(0)
const handleAdd=()=>{
    setCounter(prev=>prev+1)
}
const handlesub=()=>{
    setCounter(prev=>prev-1)
}
  return (
    <div>
        
        <h2>Counter:{counter}</h2>
    <button data-testid="adbtn" onClick={handleAdd}>add</button>
    <button className='subbtn' onClick={handlesub}>sub</button>
    
    </div>
  )
}
