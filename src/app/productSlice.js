import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    cartItems: [],
    status: 'idle',
    error: null
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.status = 'loading'
        },
        fetchSuccess: (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload
        },
        fetchFailure: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
    },
})

export const {fetchStart, fetchSuccess, fetchFailure} = productSlice.actions

export default productSlice.reducer