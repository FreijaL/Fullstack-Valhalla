import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import orderReducer from './orderSlice';
import staffSlice from "./staffSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        order: orderReducer,
        staff: staffSlice,
    }
});

export default store;