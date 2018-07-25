import * as TYPES from 'actions/constants/basketConstants';
import { omit } from 'lodash';

const initial_state = {
  products: {},
  errors: {},
  closed: true,
}

export default function reducer(state = initial_state, action) {
  switch(action.type) {
    case TYPES.ADD_PRODUCT: {
      // action.payload = product object
      state = { 
        ...state,
        products: { ...state.products, [action.payload._id]: action.payload }
      }
      break;
    }
    case TYPES.REMOVE_PRODUCT: {
      // action.payload = product id
      state = {
        ...state,
        products: omit(state.products, action.payload)
      }
      break;
    }
    case TYPES.CLEAR_BASKET: {
      state = Object.assign({}, initial_state);
      break;
    }
    case TYPES.OPEN_BASKET: {
      // action.payload = is open
      state = { ...state, closed: !action.payload };
      break;
    }
    default: {}
  }
  return state;
}