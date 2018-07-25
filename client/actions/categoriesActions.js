import * as TYPES from 'actions/constants/categoriesConstants'
import axios from 'axios';

// Fetching categories
export const fetchCategories = (filter = {}) => {
  return async dispatch => {
    dispatch(requestCategories(filter));
    try {
      const res = await axios.get('/api/categories', { params: { ...filter }});
      const categories = res.data;
      dispatch(receiveCategories(categories));
    } catch (e) {
      dispatch(setCategoriesErrors(e));
    }
  }
}

export const requestCategories = (filter) => ({
  type: TYPES.REQUEST_CATEGORIES,
  payload: filter
})

export const receiveCategories = (categories) => ({
  type: TYPES.RECEIVE_CATEGORIES,
  payload: categories
})

// Fetching single category
export const fetchCategory = (categoryId) => {
  return async dispatch => {
    dispatch(requestCategory(categoryId));
    try {
      const res = await axios.get(`/api/categories/${categoryId}`);
      const category = res.data;
      dispatch(receiveCategory(category));
    } catch (e) {
      dispatch(setCategoriesErrors(e));
    }
  }
}

export const requestCategory = (categoryId) => ({
  type: TYPES.REQUEST_CATEGORIES,
  payload: filter
})

export const receiveCategory = (category) => ({
  type: TYPES.RECEIVE_CATEGORY,
  payload: category
})

// Creating category
export const createCategory = (data) => {
  return async dispatch => {
    try {
      const res = await axios.post(`/api/categories`, data);
      const category = res.data;
      dispatch(receiveCategory(category));
    } catch (e) {
      dispatch(setCategoriesErrors(e));
    }
  }
}

// Updating category
export const updateCategory = (categoryId, data) => {
  return async dispatch => {
    try {
      const res = await axios.put(`/api/categories/${categoryId}`, data);
      const category = res.data;
      dispatch(receiveCategory(category));
    } catch (e) {
      dispatch(setCategoriesErrors(e));
    }
  }
}

// Delete category
export const deleteCategory = (categoryId) => {
  return async dispatch => {
    try {
      const res = await axios.delete(`/api/categories/${categoryId}`);
      const category = res.data;
      if(category.n === 1 && category.ok === 1)
        dispatch(deletedCategory(categoryId));
    } catch (e) {
      dispatch(setCategoriesErrors(e));
    }
  }
}

export const deletedCategory = (categoryId) => ({
  type: TYPES.DELETE_CATEGORY,
  payload: categoryId
})

// Set categories errors
export const setCategoriesErrors = (errors) => ({
  type: TYPES.SET_CATEGORIES_ERRORS,
  payload: errors
})