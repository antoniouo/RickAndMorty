import { ADD_LIKE, DEL_LIKE } from '../types';

const likeReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_LIKE:
      if (!state.includes(payload)) { return [...state, payload]; }

    // eslint-disable-next-line no-fallthrough
    case DEL_LIKE:
      return state.filter((el) => el.id !== payload.id);

    default:
      return state;
  }
};

export default likeReducer;
