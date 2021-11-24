import { FETCH_POLLS, ADD_POLL, ANSWER_POLL } from "../actions/polls";

export function polls(state = {}, action) {
  switch (action.type) {
    case FETCH_POLLS:
      return {
        ...action.payload,
      };
    case ADD_POLL:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case ANSWER_POLL:
      return {
        ...state,
        [action.payload.qid]: {
          ...state[action.payload.qid],
          [action.payload.answer]: {
            ...state[action.payload.qid][action.payload.answer],
            votes: state[action.payload.qid][
              action.payload.answer
            ].votes.concat([action.payload.user]),
          },
        },
      };

    default:
      return state;
  }
}
