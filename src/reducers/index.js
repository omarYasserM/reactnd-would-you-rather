import { combineReducers } from "redux";
import { users } from "./users";
import { currentUser } from "./currentUser";
import { polls } from "./polls";
import { loadingBarReducer } from "react-redux-loading";
export default combineReducers({
  users,
  currentUser,
  polls,
  loadingBar: loadingBarReducer,
});
