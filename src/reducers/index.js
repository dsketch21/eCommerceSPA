import { combineReducers } from 'redux';
import product from './product';
import shoppingCart from './shoppingCart';

const reducers = {
    product,
    shoppingCart
};

export default combineReducers(reducers);
