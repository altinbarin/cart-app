import { useState, useEffect } from 'react'
import ProductCSS from '../../style/Product.module.css'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../redux/actions/cartActions'

const PopularProducts = () => {


  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log("product",product);
    dispatch(addToCart(product)); // Ürünü sepete eklemek için dispatch kullanımı
  };

    const [popularProducts, setPopularProducts] = useState([])

     useEffect(()=>{

        fetch('https://dummyjson.com/products')
        .then(response=>{
            return response.json()
          })
          .then(data=>{
            setPopularProducts(data.products.filter(product=>product.rating>4.6));
            // console.log(popularProducts);
          })
          .catch(error=>{
            console.log(error)
          })
    },[]);



  return (
    <div className={ProductCSS.Products}>         
      {popularProducts.map(popularProduct=>       
          <div className={ProductCSS.card} key={popularProduct.id}>
            <h1 className={ProductCSS.title}>{popularProduct.title}</h1>
            <img className={ProductCSS.productImage} src={popularProduct.images[0]}/>
            <p className={ProductCSS.description}>{popularProduct.description}</p>
            <h3 className={ProductCSS.discount}>Discount: {popularProduct.discountPercentage}%</h3>
            <h2 className={ProductCSS.priceWithoutDiscount}>{Math.ceil((popularProduct.price)/(1-(popularProduct.discountPercentage/100)))}$</h2>
            <h2 className={ProductCSS.price}>{popularProduct.price}$</h2>
            {/* <button className={ProductCSS.addToCart}>Add To Cart</button> */}
            <button
            className={ProductCSS.addToCart}
            onClick={() => handleAddToCart(popularProduct)}
          >
            Add To Cart
          </button>
            </div>
          )}    
    </div>
  )
}

export default PopularProducts
