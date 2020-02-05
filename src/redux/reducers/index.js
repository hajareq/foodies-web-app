import postReducer from "./postReducer";
import isLoggedReducer from "./isLogged";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import logInReducer from "./logInReducer";

const allReducers = combineReducers({
  post: postReducer,
  user: userReducer,
  login: logInReducer,
  isLogged: isLoggedReducer
});

export default allReducers;
