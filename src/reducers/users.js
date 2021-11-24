import { ADD_POLL, ANSWER_POLL } from "../actions/polls";
import { FETCH_USERS } from "../actions/users";

export function users(state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_POLL:
      return {
        ...state,
        [action.payload.author]: {
          ...state[action.payload.author],
          questions: state[action.payload.author].questions.concat(
            action.payload.id
          ),
        },
      };
    case ANSWER_POLL:
      return {
        ...state,
        [action.payload.user]: {
          ...state[action.payload.user],
          answers: {
            ...state[action.payload.user].answers,
            [action.payload.qid]: action.payload.answer,
          },
        },
      };
    default:
      return state;
  }
}
