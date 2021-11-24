import { _getQuestions, _getUsers } from "../_DATA";
import { fetchPolls } from "./polls";
import { fetchUsers } from "./users";
import { hideLoading, showLoading } from "react-redux-loading";

export function fetchAPIData() {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, polls]) => {
        dispatch(fetchUsers(users));
        dispatch(fetchPolls(polls));
        dispatch(hideLoading());
      }
    );
  };
}
