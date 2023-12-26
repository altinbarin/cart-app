import React from 'react'
import { useState, useEffect } from 'react'
import SlideProductsCSS from '../../style/SlideProducts.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function SlideProducts() {

  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);

   const nextSlide = () => {
      setIndex((index)=>{
        let newIndex = index+1;
        if(newIndex > 4){
          newIndex= 0;
        }
        return newIndex;
      })
    };

    const previousSlide = () => {
      setIndex((index)=>{
        let newIndex = index-1;
        if(newIndex ===-1){
          newIndex= 4;
        }
        return newIndex;
      })
    };


  useEffect(()=>{
    fetch('https://dummyjson.com/products').then(response=>{
      return response.json()
    })
    .then(data=>{
      setProducts(data.products)
      // console.log(products)
    })
    .catch(error=>{
      console.log(error)
    })
  },[]);


  return (
    <div className='Products'>    
          {products.length>0 &&(
             <div className={SlideProductsCSS.card} key={products[index].id}>
             <div className={SlideProductsCSS.container}>
             <h1 className={SlideProductsCSS.title}>{products[index].title}</h1>
             <img className={SlideProductsCSS.productImage} src={products[index].images[0]}/>
             <p className={SlideProductsCSS.description}>{products[index].description}</p>
             <h3 className={SlideProductsCSS.discount}>Discount: {products[index].discountPercentage}%</h3>
             <h2 className={SlideProductsCSS.priceWithoutDiscount}>{Math.ceil((products[index].price)/(1-(products[index].discountPercentage/100)))}$</h2>
             <h2 className={SlideProductsCSS.price}>{products[index].price}$</h2>
             <button className={SlideProductsCSS.addToCart}>Add To Cart</button> <br/>
             <button className={SlideProductsCSS.previousSlideButton} onClick={previousSlide}><ArrowBackIosIcon/></button>
             <button className={SlideProductsCSS.nextSlideButton} onClick={nextSlide}><ArrowForwardIosIcon/></button>
             </div>
             </div>     
          )}
    </div>
  )
}

export default SlideProducts
