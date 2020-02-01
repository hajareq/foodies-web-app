import postReducer from "./postReducer";
import isLoggedReducer from "./isLogged";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  post: postReducer,
  user: userReducer,
  isLogged: isLoggedReducer
});

export default allReducers;
