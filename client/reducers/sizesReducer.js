import * as TYPES from 'actions/constants/sizesConstants'
import { mapKeys, omit } from 'lodash';

const initial_state = {
  isFetching: false,
  sizes: {},
  errors: null
}

export default function reducer(state = initial_state, action) {
  switch(action.type) {
    case TYPES.REQUEST_SIZE:
    case TYPES.REQUEST_SIZES: {
      state = { ...state, isFetching: true };
      break;
    }
    case TYPES.RECEIVE_SIZE: {
      state = { 
        ...state, 
        isFetching: false, 
        sizes: { ...state.sizes, [action.payload._id]: action.payload }
      };
      break;
    }
    case TYPES.RECEIVE_SIZES: {
      state = {
        ...state,
        isFetching: false,
        sizes: mapKeys(action.payload, '_id')
      }
      break;
    }
    case TYPES.DELETE_SIZE: {
      // action.payload = deleted id
      state = { ...state, sizes: omit(state.sizes, action.payload)};
      break;
    }
    case TYPES.SET_SIZES_ERRORS: {
      state = { ...state, errors: action.payload };
      break;
    }
    default: {}
  }
  return state;
}