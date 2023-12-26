import React from 'react'
import { Link } from 'react-router-dom'
import NavbarCSS from '../style/Navbar.module.css';

function Navbar() {
  return (
    <div className={NavbarCSS.Navbar}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar
