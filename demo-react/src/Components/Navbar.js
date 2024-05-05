import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <a className='asd'><Link to='/'>Home</Link></a>
           
           <a className='qwe'><Link to='/about'>About</Link></a>
           <a><Link to='/skill'>Skills</Link></a>
        </nav>
    </div>
  )
}

export default Navbar