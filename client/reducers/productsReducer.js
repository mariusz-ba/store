import * as TYPES from 'actions/constants/productsConstants';
import { mapKeys, omit } from 'lodash';

const initial_state = {
  isFetching: false,
  products: {},
  errors: null
}

export default function reducer(state = initial_state, action) {
  switch(action.type) {
    case TYPES.REQUEST_PRODUCT:
    case TYPES.REQUEST_PRODUCTS: {
      state = { ...state, isFetching: true };
      break;
    }
    case TYPES.RECEIVE_PRODUCT: {
      state = { 
        ...state, 
        isFetching: false, 
        products: { ...state.products, [action.payload._id]: action.payload }
      };
      break;
    }
    case TYPES.RECEIVE_PRODUCTS: {
      state = { ...state, isFetching: false, products: mapKeys(action.payload, '_id') }
      break;
    }
    case TYPES.DELETE_PRODUCT: {
      state = { ...state, products: omit(state.products, action.payload)};
      break;
    }
    default: {}
  }
  return state;
}