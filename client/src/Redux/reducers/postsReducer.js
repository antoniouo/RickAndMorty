import { ADD_POSTS, DELETE_POST } from '../types';

const postReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_POSTS:
      return payload;

    case DELETE_POST:
      return state.filter((el) => el.id !== payload);

    default:
      return state;
  }
};

export default postReducer;
