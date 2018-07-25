import { combineReducers } from 'redux';

import basketReducer from './basketReducer';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import sizesReducer from './sizesReducer';

export default combineReducers({
  basket: basketReducer,
  products: productsReducer,
  categories: categoriesReducer,
  sizes: sizesReducer
})