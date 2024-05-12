import React,{ useState } from 'react'
import { Link } from 'react-router-dom';

const Conditional_Rendering = () => {
    const[count,setCount] = useState(0);
    // let text = 'black'
    // if(count>2){
    //     text = 'red'
    // }
  return (
    <div>
       {/* <button style={{ color: text }} onClick={()=>setCount(count+1)}>Count is: {count}</button> */}
       <button style={{ color: count > 2 ? 'red' : 'black' }} onClick={()=>setCount(count+1)}>
           Count is: {count}
        </button>
    </div>
  )
}

export default Conditional_Rendering