import { productStore } from '../store/productStore';

const productReducer = ( state = productStore, action ) => {
    switch (action.type) {
        case "BUY_PRODUCT":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "FILL_STOCK":
            return {
                ...state,
                menu: [...action.payload]
            }
        default:
            return state
    }
};

export default productReducer;