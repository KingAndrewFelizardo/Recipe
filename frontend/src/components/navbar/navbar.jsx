import React from 'react'
import "./navbar.css"

import { Link } from 'react-router'

const navbar = () => {
  return (
    <div className='navbar'>
      <ul className='pages'>
        <Link to='/'>Home</Link>
        <Link to='/post'>Post</Link>
        <Link to='/recipe'>Recipe</Link>
        <Link to='/account'>Account</Link>
      </ul>
      <ul className='account'>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </ul>
    </div>
  )
}

export default navbar
