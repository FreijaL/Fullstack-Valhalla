import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
            console.log('action log:', action.payload);
        },
        addCustomerNameToOrder: (state, action) => {
            state.customerInfo.customerName = action.payload
        },
        addCustomerPhoneToOrder: (state, action) => {
            state.customerInfo.customerPhone = action.payload
        },
    },
})

export const { addCartToOrder, addCommentToOrder, addCustomerNameToOrder, addCustomerPhoneToOrder } = orderSlice.actions

export default orderSlice.reducer