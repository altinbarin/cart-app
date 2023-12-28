import React from 'react'
import { Link } from 'react-router-dom'
import NavbarCSS from '../../style/Navbar.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <div className={NavbarCSS.Navbar}>
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
    </div>

    <div className={NavbarCSS.Cart}>
       <button className={NavbarCSS.CartButton}>
       <ShoppingCartIcon className={NavbarCSS.icon} />
        </button> 
    </div>
    
    </div>
  )
}

export default Navbar
