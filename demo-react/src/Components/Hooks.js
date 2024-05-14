import React from 'react'
import {Link} from 'react-router-dom'
const Hooks = () => {
  return (
    <div>
            <a><Link to='/usestate'>useState</Link></a><br></br>
            <a><Link to='/usereducer'>useReducer</Link></a><br></br>
            <a><Link to='/useeffect'>UseEffect</Link></a>
            <a><Link to='/fetchdata'>UseEffect</Link></a>
    </div>
  )
}

export default Hooks