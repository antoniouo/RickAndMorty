import axios from 'axios';
import { ADD_POSTS, DELETE_POST } from '../types';

export const addPosts = () => (dispatch) => {
  axios('https://rickandmortyapi.com/api/character/?page=1')
    .then((res) => dispatch({ type: ADD_POSTS, payload: res.data.results }));
};

export const addOnePost = (id) => (dispatch) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => dispatch({ type: ADD_POSTS, payload: res.data }));
};

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});
