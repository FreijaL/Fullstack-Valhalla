//productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    cartItems: [],
    counter: 0,
    priceTotal: 0,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fillStock: (state, action) => {
            state.products = (action.payload)
        },
        fillIdCounter: (state, action) => {
            state.counter = action.payload
        },
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            } else {
                state.cartItems = [...state.cartItems, {...action.payload, quantity: 1}];
            }
        },
        increaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            state.cartItems[itemIndex].quantity += 1;
            state.cartItems = [...state.cartItems];
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            state.cartItems[itemIndex].quantity -= 1;
            state.cartItems = [...state.cartItems];
        },
        filterCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            state.cartItems = state.cartItems.filter((item, index) => {
                if (index !== itemIndex) {
                    return true;
                } else {
                    return item.quantity > 0;
                }
            });
        },
        calculatePriceTotal: (state, action) => {
            state.priceTotal = state.cartItems.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.price * currentItem.quantity;
            }, 0);
        },
    },
})

export const {fillStock, fillIdCounter, addToCart, calculatePriceTotal, increaseQuantity, decreaseQuantity, filterCart } = productSlice.actions

export default productSlice.reducer