import React,{useState} from 'react'

const Usestate = () => {
    let initialcount = 0;
    const[count,setCount] = useState(0)
    const increment = () =>{
      setCount((prevcount) => (prevcount+2))
    }
    const[objcount,setObjCount]=useState({value:100,type:'objcount'})

    const objIncrement = () =>{
      setObjCount((prevobjcount)=>{
        return{value:prevobjcount.value + 3}
      })
    }
    const objDecrement = () =>{
      setObjCount((prevobjcount) =>{
        return{value:prevobjcount.value - 3}
      })
    }
  return (
    <div>
      <h3>Without object</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={increment}>Increment2</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(initialcount)}>Reload</button>
        <p>{count}</p>
        <h3>With object</h3>
        <button onClick={objIncrement}>+3</button>
        <button onClick={objDecrement}>-3</button>
        <p>{`counter value: ${objcount.value}`}</p>
    </div>
  )
}

export default Usestate