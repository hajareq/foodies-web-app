import postReducer from "./postReducer";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  post: postReducer,
  isLogged: isLoggedReducer
});

export default allReducers;
