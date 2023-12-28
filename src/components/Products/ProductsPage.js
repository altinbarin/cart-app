import { useState, useEffect } from 'react'
import Products from './Products'
import FilterBox from './FilterBox'
import ProductsPageCSS from '../../style/ProductsPage.module.css'

const ProductsPage = () => {

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
    <div className={ProductsPageCSS.container}>
      <div className={ProductsPageCSS.content}>
      <FilterBox products = {products} className={ProductsPageCSS.filterBox}/>

      </div>
    </div>
  )
}

export default ProductsPage
