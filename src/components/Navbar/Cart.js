import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart, updateCartQuantity } from "../../redux/actions/cartActions";
import styles from "../../style/Cart.module.css";



function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleUpdateCartQuantity = (product, quantity) => {
    dispatch(updateCartQuantity(product, quantity));
  };




  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className={styles.cartItem}>
            <img src={product.images[0]} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button onClick={() => handleRemoveFromCart(product)}>
                Remove
              </button>
              <input
                type="number"
                value={product.quantity || 1}
                onChange={(e) =>
                  handleUpdateCartQuantity(product, e.target.value)
                }
                onKeyDown={(e) => {
                  e.preventDefault();
                }}
                />
            </div>
          </div>
        ))
      )}
      <div>
      <button className={styles.BuyAll} onClick={() => dispatch(clearCart())}>Buy All</button>
      <button className={styles.ClearAll} onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  );
  
}


export default Cart;