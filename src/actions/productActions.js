import { ADD_PRODUCT_TO_CART, LOAD_PRODUCT } from './types';

import productService from '../services/productService';

export const addProductToCart = ({
    optionId,
    productId,
    sizeId
}) => async dispatch => {
    const productOptions = {
        optionId,
        productId,
        sizeId
    };
    const productsInCart = await productService.addProductToCart(productOptions);
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: {
            productsInCart
        }
    });
};

export const loadProduct = () => async dispatch => {
    const product = await productService.getProductOTD();
    dispatch({
        type: LOAD_PRODUCT,
        payload: {
            product
        }
    });
};
