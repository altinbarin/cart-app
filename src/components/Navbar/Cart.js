import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../../redux/actions'


const Cart = () => {
 
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducers)
  const { cartItems } = cart
  const removeFromCartHandler = (id) => {
    dispatch(Actions.removeFromCart(id))
  }
  const checkoutHandler = () => {
    // props.history.push('/signin?redirect=shipping')
    
  }


  

  return (
    <div>
      {cartItems.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>
                <button
                  type="button"
                  onClick={() => removeFromCartHandler(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button type="button" onClick={checkoutHandler}>
            Proceed To Checkout
          </button>
        </div>
      )}    
    </div>
  )
}

export default Cart
