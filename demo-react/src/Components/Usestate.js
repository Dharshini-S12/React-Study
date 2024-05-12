import React,{useState} from 'react'

const Usestate = () => {
    let initialcount = 0;
    const[count,setCount] = useState(0);
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(initialcount)}>Reload</button>
        <p>{count}</p>
    </div>
  )
}

export default Usestate