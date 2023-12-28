import ProductCSS from "../../style/Product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";


function Products(props) {
  const dispatch = useDispatch();

  

  const handleAddToCart = (product) => {
    console.log("product", product);
    dispatch(addToCart(product)); // Ürünü sepete eklemek için dispatch kullanımı
  };




  return (
    <div className={ProductCSS.Products}>
      {props.products.map((product, index) => (
        <div key={`${product.id}, ${index}`} className={ProductCSS.card}>
          <h1 className={ProductCSS.title}>{product.title}</h1>
          <img className={ProductCSS.productImage} src={product.images[0]} />
          <p className={ProductCSS.description}>{product.description}</p>
          <p className={ProductCSS.rating}>{product.rating}</p>
          <h3 className={ProductCSS.discount}>
            Discount: {product.discountPercentage}%
          </h3>
          <h2 className={ProductCSS.priceWithoutDiscount}>
            {Math.ceil(product.price / (1 - product.discountPercentage / 100))}$
          </h2>
          <h2 className={ProductCSS.price}>{product.price}$</h2>

          <button
            className={ProductCSS.addToCart}
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart
          </button>

        </div>
      ))}
    </div>
  );
}

export default Products;
