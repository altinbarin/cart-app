import { Link } from "react-router-dom";
import NavbarCSS from "../../style/Navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);
  const cartRef = useRef(null);
  
  const cart = useSelector((state) => state.cart);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
    setIsCartActive(true);
  };

  const handleDocumentClick = (e) => {
    if (cartRef.current && !cartRef.current.contains(e.target)) {
      setIsCartOpen(false);
      setIsCartActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, []);

  return (
    <div className={NavbarCSS.Navbar}>
      <div className={NavbarCSS.NavbarLeft}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
      </div>

      <div className={NavbarCSS.NavbarRight}>
        <button className={NavbarCSS.CartButton} onClick={handleCartClick}>
          <ShoppingCartIcon className={NavbarCSS.CartIcon} />
          {cart.length > 0 && (
            <span className={NavbarCSS.CartItemCount}>{cart.length}</span>
          )}
        </button>
      </div>

      {isCartOpen && (
        <div className={NavbarCSS.Cart} ref={cartRef}>
          <Cart />
        </div>
      )}
    </div>
  );
}

export default Navbar;
