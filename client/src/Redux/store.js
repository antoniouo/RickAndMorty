import { configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/postsReducer';
import likeReducer from './reducers/likeReducer';

const store = configureStore({
  reducer: {
    post: postReducer,
    like: likeReducer,
  },
});

export default store;
