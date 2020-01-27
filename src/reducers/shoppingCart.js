import { ADD_PRODUCT_TO_CART } from '../actions/types';

const initialState = {
    productsInCart: []
};

const shoppingCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                productsInCart: action.payload.productsInCart
            };
        default:
            return state;
    }
};

export default shoppingCart;
