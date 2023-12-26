import React from 'react'
import { useState, useEffect } from 'react'
import ProductCSS from '../../style/Product.module.css'

function Products() {

  const [products, setProducts] = useState([])


  useEffect(()=>{
    fetch('https://dummyjson.com/products').then(response=>{
      return response.json()
    })
    .then(data=>{
      setProducts(data.products)
      console.log(data.products)
    })
    .catch(error=>{
      console.log(error)
    })
  },[])


  return (
    <div className={ProductCSS.Products}>         
      {products.map(product=>       
          <div className={ProductCSS.card} key={product.id}>
            <h1 className={ProductCSS.title}>{product.title}</h1>
            <img className={ProductCSS.productImage} src={product.images[0]}/>
            <p className={ProductCSS.description}>{product.description}</p>
            <h3 className={ProductCSS.discount}>Discount: {product.discountPercentage}%</h3>
            <h2 className={ProductCSS.priceWithoutDiscount}>{Math.ceil((product.price)/(1-(product.discountPercentage/100)))}$</h2>
            <h2 className={ProductCSS.price}>{product.price}$</h2>
            <button className={ProductCSS.addToCart}>Add To Cart</button>
            </div>
          )}    
    </div>
  )
}

export default Products
