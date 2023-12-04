import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    cartItems: [],
    counter: 0,
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
        }
    },
})

export const {fillStock, fillIdCounter} = productSlice.actions

export default productSlice.reducer