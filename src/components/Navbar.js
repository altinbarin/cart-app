import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar
