import { formatQuestion } from "../util";
import { _saveQuestion, _saveQuestionAnswer } from "../_DATA";

export const FETCH_POLLS = "fetch/polls";
export const ADD_POLL = "add/poll";
export const ANSWER_POLL = "answer/poll";

export function fetchPolls(polls) {
  return {
    type: FETCH_POLLS,
    payload: polls,
  };
}
export function handleAnswerPoll(answer) {
  return (dispatch) => {
    dispatch(answerPoll(answer));
    Promise.resolve(
      _saveQuestionAnswer({
        authedUser: answer.user,
        qid: answer.qid,
        answer: answer.answer,
      })
    );
  };
}

export function handleAddPoll(poll) {
  const formattedPoll = formatQuestion(poll);

  return (dispatch) => {
    dispatch(addPoll(formattedPoll));
    Promise.resolve(_saveQuestion(formattedPoll));
  };
}

function answerPoll(answer) {
  return {
    type: ANSWER_POLL,
    payload: answer,
  };
}
function addPoll(poll) {
  return {
    type: ADD_POLL,
    payload: poll,
  };
}
