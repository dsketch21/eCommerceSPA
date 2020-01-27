import { LOAD_PRODUCT } from '../actions/types';

const product = (state = {}, action) => {
    switch (action.type) {
        case LOAD_PRODUCT:
            return {
                ...state,
                product: action.payload.product
            };
        default:
            return state;
    }
};

export default product;
