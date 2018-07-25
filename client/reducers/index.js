import { combineReducers } from 'redux';

import basketReducer from './basketReducer';
import productsReducer from './productsReducer';
import sizesReducer from './sizesReducer';

export default combineReducers({
  basket: basketReducer,
  products: productsReducer,
  sizes: sizesReducer
})