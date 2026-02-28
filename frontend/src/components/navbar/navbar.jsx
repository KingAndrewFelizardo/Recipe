import React from 'react'
import "./navbar.css"

import { Link } from 'react-router'

const navbar = () => {
  return (
    <div className='navbar'>
      <h1>Recipe</h1>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/post'>Post</Link>
        <Link to='/recipe'>Recipe</Link>
        <Link to='/account'>Account</Link>
      </ul>
    </div>
  )
}

export default navbar
