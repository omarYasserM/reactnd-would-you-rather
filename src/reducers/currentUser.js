import { SIGN_IN, SIGN_OUT } from "../actions/currentUser";
import { ANSWER_POLL } from "../actions/polls";

export function currentUser(state = null, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...action.payload,
      };
    case SIGN_OUT:
      return null;
    case ANSWER_POLL:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.qid]: action.payload.answer,
        },
      };
    default:
      return state;
  }
}
