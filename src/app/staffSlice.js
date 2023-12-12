import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderHistory: [],
    kitchenOrders: [],
    serviceOrders: [],
};

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        getOrderHistory: (state, action) => {
            state.orderHistory = action.payload.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
        },
        filterKitchenStatus: (state, action) => {
            state.kitchenOrders = action.payload
            .filter((item) => item.progress === "Pending")
            .sort((a, b) => new Date(a.orderDate) - new Date(b.orderDate));
        },
        filterServiceStatus: (state, action) => {
            state.serviceOrders = action.payload
            .filter((item) => item.progress === "InProgress")
            .sort((a, b) => new Date(a.orderDate) - new Date(b.orderDate));
        },
    },
})

export const { getOrderHistory, filterKitchenStatus, filterServiceStatus } = staffSlice.actions

export default staffSlice.reducer