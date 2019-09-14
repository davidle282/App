import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import articleReducer from "./articleReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  articles: articleReducer
});
