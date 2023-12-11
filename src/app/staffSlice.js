import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderHistory: [],
};

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        getOrderHistory: (state, action) => {
            state.orderHistory = action.payload
        },

    },
})

export const { getOrderHistory } = staffSlice.actions

export default staffSlice.reducer