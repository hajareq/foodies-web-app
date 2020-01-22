import { FETCH_ALL_POSTS } from "../actions/postActions";

const defaultState = [];

const postReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return [...oldState, ...action.payload];
    default:
      return oldState;
  }
};

export default postReducer;
