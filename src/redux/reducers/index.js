import postReducer from "./postReducer";
import userReducer from "./userReducer";
import addPostReducer from "./addPostReducer";
import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import auth from "./auth";

const allReducers = combineReducers({
  post: postReducer,
  user: userReducer,
  login: logInReducer,
  addPostReducer: addPostReducer,
  auth: auth
});

export default allReducers;
