import * as TYPES from './constants/basketConstants';

export const addProduct = (product) => ({
  type: TYPES.ADD_PRODUCT,
  payload: product
})

export const removeProduct = (productId) => ({
  type: TYPES.REMOVE_PRODUCT,
  payload: productId
})

export const clearBasket = () => ({
  type: TYPES.CLEAR_BASKET
})