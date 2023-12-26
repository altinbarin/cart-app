import React from 'react'
import Products from './Products'
import FilterBox from './FilterBox'
import ProductsPageCSS from '../../style/ProductsPage.module.css'

const ProductsPage = () => {
  return (
    <div className={ProductsPageCSS.container}>
      <div className={ProductsPageCSS.content}>
      <FilterBox className={ProductsPageCSS.filterBox}/>
      <Products className={ProductsPageCSS.products}/>
      </div>
    </div>
  )
}

export default ProductsPage
