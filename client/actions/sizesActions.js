import * as TYPES from 'actions/constants/sizesConstants'
import axios from 'axios';

// Fetching sizes
export const fetchSizes = (filter = {}) => {
  return async dispatch => {
    dispatch(requestSizes(filter));
    try {
      const res = await axios.get('/api/sizes', { params: { ...filter }});
      const sizes = res.data;
      dispatch(receiveSizes(sizes));
    } catch (e) {
      dispatch(setSizesErrors(e));
    }
  }
}

export const requestSizes = (filter) => ({
  type: TYPES.REQUEST_SIZES,
  payload: filter
})

export const receiveSizes = (sizes) => ({
  type: TYPES.RECEIVE_SIZES,
  payload: sizes
})

// Fetching single size
export const fetchSize = (sizeId) => {
  return async dispatch => {
    dispatch(requestSize(sizeId));
    try {
      const res = await axios.get(`/api/sizes/${sizeId}`);
      const size = res.data;
      dispatch(receiveSize(size));
    } catch (e) {
      dispatch(setSizesErrors(e));
    }
  }
}

export const requestSize = (sizeId) => ({
  type: TYPES.REQUEST_SIZE,
  payload: filter
})

export const receiveSize = (size) => ({
  type: TYPES.RECEIVE_SIZE,
  payload: size
})

// Creating size
export const createSize = (data) => {
  return async dispatch => {
    try {
      const res = await axios.post(`/api/sizes`, data);
      const size = res.data;
      dispatch(receiveSize(size));
    } catch (e) {
      dispatch(setSizesErrors(e));
    }
  }
}

// Updating size
export const updateSize = (sizeId, data) => {
  return async dispatch => {
    try {
      const res = await axios.put(`/api/sizes/${sizeId}`, data);
      const size = res.data;
      dispatch(receiveSize(size));
    } catch (e) {
      dispatch(setSizesErrors(e));
    }
  }
}

// Delete size
export const deleteSize = (sizeId) => {
  return async dispatch => {
    try {
      const res = await axios.delete(`/api/sizes/${sizeId}`);
      const size = res.data;
      if(size.n === 1 && size.ok === 1)
        dispatch(deletedSize(sizeId));
    } catch (e) {
      dispatch(setSizesErrors(e));
    }
  }
}

export const deletedSize = (sizeId) => ({
  type: TYPES.DELETE_SIZE,
  payload: sizeId
})

// Set sizes errors
export const setSizesErrors = (errors) => ({
  type: TYPES.SET_SIZES_ERRORS,
  payload: errors
})