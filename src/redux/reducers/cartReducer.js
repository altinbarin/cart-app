

export const cartReducer = (state = [], action) => {
    const initialState = {
        cartCount: 0,
      };

    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter((item) => item.id !== action.payload.id);
        case 'CLEAR_CART':
            return [];
        case 'UPDATE_CART_QUANTITY':
            return state.map((item) => {
                if (item.id === action.payload.product.id) {
                    return {
                        ...item,
                        quantity: action.payload.quantity,
                    };
                }
                return item;
            });
        case 'UPDATE_CART_COUNT':
                  return {
                    ...state,
                    cartCount: action.payload
                  };       
        default:
            return state;
    }
} 