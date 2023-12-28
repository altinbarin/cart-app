import { configureStore } from '@reduxjs/toolkit';
import {cartReducer} from './reducers/cartReducer';

const defaultState = {
    cart: [],
};

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: defaultState,
});

