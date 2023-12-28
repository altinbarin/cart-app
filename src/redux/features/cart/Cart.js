import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, replaceCart, removeItemFromCart } from "./cartSlice";


export function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    
    const addToCartHandler = (item) => {
        dispatch(addItemToCart(item));
    };
    
    const removeFromCartHandler = (id) => {
        dispatch(removeItemFromCart(id));
    };
    
    const submitOrderHandler = async () => {
        const response = await fetch(
        "https://react-http-6c8b6-default-rtdb.firebaseio.com/orders.json",
        {
            method: "POST",
            body: JSON.stringify(cart),
        }
        );
    
        if (!response.ok) {
        throw new Error("Something went wrong!");
        }
    
        dispatch(replaceCart({ items: [], totalQuantity: 0 }));
    };
    
    const cartItems = cart.items.map((item) => (
        <li key={item.id}>
        {item.name} - {item.quantity} x ${item.price.toFixed(2)}
        <button onClick={removeFromCartHandler.bind(null, item.id)}>
            Remove from Cart
        </button>
        </li>
    ));
    
    return (
        <div>
        <ul>{cartItems}</ul>
        <div>
            Total: ${cart.totalPrice.toFixed(2)}
            <button onClick={submitOrderHandler}>Order</button>
        </div>
        </div>
    );
    }