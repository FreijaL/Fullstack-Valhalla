import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderNumber: '',
    orderComment: '',
    customerInfo: {
        customerName: '',
        customerPhone: '',
    },
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addCommentToOrder: (state, action) => {
            state.orderComment = action.payload
        },
        addCustomerNameToOrder: (state, action) => {
            state.customerInfo.customerName = action.payload
        },
        addCustomerPhoneToOrder: (state, action) => {
            state.customerInfo.customerPhone = action.payload
        },
        addOrderNumber: (state, action) => {
            state.orderNumber = action.payload
        }
    },
})

export const { addCartToOrder, addCommentToOrder, addCustomerNameToOrder, addCustomerPhoneToOrder, addOrderNumber } = orderSlice.actions

export default orderSlice.reducer