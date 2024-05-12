import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
          <a className='asd'><Link to='/'>Home</Link></a>
          <a className='qwe'><Link to='/about'>About</Link></a>
          <a className='qwe'><Link to='/mapping'>Array Mapping</Link></a>
          <a><Link to="/conditionalrender" >Conditional Rendering</Link></a>
          <a><Link to="/hooks" >Hooks</Link></a>
          
        </nav>
    </div>
  )
}

export default Navbar