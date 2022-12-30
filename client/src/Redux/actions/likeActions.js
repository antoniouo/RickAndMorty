import { ADD_LIKE, DEL_LIKE } from '../types';

export const addLike = (value) => (dispatch) => {
  dispatch({ type: ADD_LIKE, payload: value });
};

export const delLike = (value) => (dispatch) => {
  dispatch({ type: DEL_LIKE, payload: value });
};
