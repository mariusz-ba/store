import * as TYPES from 'actions/constants/categoriesConstants'
import { mapKeys, omit } from 'lodash';

const initial_state = {
  isFetching: false,
  categories: {},
  errors: null
}

export default function reducer(state = initial_state, action) {
  switch(action.type) {
    case TYPES.REQUEST_CATEGORY:
    case TYPES.REQUEST_CATEGORIES: {
      state = { ...state, isFetching: true };
      break;
    }
    case TYPES.RECEIVE_CATEGORY: {
      state = { 
        ...state, 
        isFetching: false, 
        categories: { ...state.categories, [action.payload._id]: action.payload }
      };
      break;
    }
    case TYPES.RECEIVE_CATEGORIES: {
      state = {
        ...state,
        isFetching: false,
        categories: mapKeys(action.payload, '_id')
      }
      break;
    }
    case TYPES.DELETE_CATEGORY: {
      // action.payload = deleted id
      state = { ...state, categories: omit(state.categories, action.payload)};
      break;
    }
    case TYPES.SET_CATEGORIES_ERRORS: {
      state = { ...state, errors: action.payload };
      break;
    }
    default: {}
  }
  return state;
}