import React, { useState, useEffect } from 'react'

const Useeffect = () => {
    const[count,setCount] = useState(0)
    const[name,setName]= useState('')
    useEffect( () => {
         document.title=`You clicked ${count} times`
    })
  return (
    <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={()=> setCount(count+1)}>+1</button>

    </div>
  )
}

export default Useeffect