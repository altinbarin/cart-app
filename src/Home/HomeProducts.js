import React from 'react'
import { useState, useEffect } from 'react'
import '../style/HomeProducts.css'
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
    <div className='Products'>         
      {products.map(product=>       
          <div className='card' key={product.id}>
            <div className='container'>
            <h1 className='title'>{product.title}</h1>
            <img className='productImage' src={product.images[0]}/>
            <p className='description'>{product.description}</p>
            <h3 className='discount'>Discount: {product.discountPercentage}%</h3>
            <h2 className='priceWithoutDiscount'>{Math.ceil((product.price)/(1-(product.discountPercentage/100)))}$</h2>
            <h2 className='price'>{product.price}$</h2>
            <button className='addToCart'>Add To Cart</button>
            </div>
            </div>
          )}    
    </div>
  )
}

export default Products
