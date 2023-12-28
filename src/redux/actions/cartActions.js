
export const addToCart = (product) => (dispatch, getState) => {
  const { cart } = getState(); // Mevcut sepet durumunu al
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // Eğer ürün zaten sepette varsa, miktarını arttır
    dispatch(updateCartQuantity(existingProduct, existingProduct.quantity + 1));
  } else {
    // Eğer ürün sepette yoksa, yeni ürün olarak ekle
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity: 1 }, // Yeni bir quantity ekleyerek ürünü sepete ekle
    });
  }
};

  export const removeFromCart = (product) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: product,
    };
  };

  export const clearCart = () => {
    return {
      type: 'CLEAR_CART',
    };
  };

  export const updateCartQuantity = (product, quantity) => {
    return {
      type: 'UPDATE_CART_QUANTITY',
      payload: {
        product,
        quantity: Number(quantity),
      },
    };
  };

  export const updateCartCount = (count) => {
    return {
      type: 'UPDATE_CART_COUNT',
      payload: count
    };
  };
  


  