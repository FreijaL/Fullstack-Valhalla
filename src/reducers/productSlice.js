import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
        cart: []
    },
    reducers: {
        fillStock: (state, action) => {
            console.log('HEJ', action.payload.input)
            state.products = action.payload.input;
        },
        addProductToCart: (state, action) => {
            state.cart.push(action.payload);
        }
    }
});


export const { fillStock, addProductToCart} = productSlice.actions;

export default productSlice.reducer;