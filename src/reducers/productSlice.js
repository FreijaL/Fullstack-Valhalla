import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: []
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fillStock: (state, action) => {
            state.products.push(...action.payload);
        },
        buyProduct: (state, action) => {
            state.products = action.payload;
        }
    }
});


export const { fillStock, buyProduct} = productsSlice.actions;

export default productsSlice.reducer;