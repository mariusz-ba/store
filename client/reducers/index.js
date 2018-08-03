import { combineReducers } from 'redux';

import authReducer from './authReducer';
import basketReducer from './basketReducer';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import sizesReducer from './sizesReducer';

export default combineReducers({
  auth: authReducer,
  basket: basketReducer,
  products: productsReducer,
  categories: categoriesReducer,
  sizes: sizesReducer
})