import React from 'react'
import HomeCSS from '../../style/Home.module.css'
import SlideProducts from './SlideProducts'



function Home() {

  return (
    <div className={HomeCSS.Home}>
      <SlideProducts />
    </div>
  )
}

export default Home
