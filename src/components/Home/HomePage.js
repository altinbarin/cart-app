import React from 'react'
import HomeCSS from '../../style/Home.module.css'
import SlideProducts from './Slider'
import PopularProducts from './PopularProducts'


function Home() {

  return (
    <div className={HomeCSS.Home}>
      <SlideProducts />
      <PopularProducts />
    </div>
  )
}

export default Home
