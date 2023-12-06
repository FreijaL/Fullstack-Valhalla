import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    order: {
        items: [],
        orderComment: '',
        customerInfo: {
            customerName: '',
            customerPhone: '',
        },
    },
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addCommentToOrder: (state, action) => {
            state.order.orderComment = action.payload
        },
        addCustomerNameToOrder: (state, action) => {
            state.order.customerInfo.customerName = action.payload
        },
        addCustomerPhoneToOrder: (state, action) => {
            state.order.customerInfo.customerPhone = action.payload
        },
        addCartToOrder: (state, action) => {
            state.order.items = [...state.order.items, ...action.payload]
        }
    },
})

export const { addCartToOrder, addCommentToOrder, addCustomerNameToOrder, addCustomerPhoneToOrder } = orderSlice.actions

export default orderSlice.reducer