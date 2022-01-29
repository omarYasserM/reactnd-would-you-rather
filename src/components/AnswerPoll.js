import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { handleAnswerPoll } from "../actions/polls";
import "./answerPoll.css";

function AnswerPoll(props) {
  const params = useParams();
  return (
    <div className="answer-poll">
      <div className="name">
        <span>
          <b>{props.users[props.polls[params.id].author].name}</b> asked: would
          you rather
        </span>
      </div>
      <div className="wyr">
        <div className="q-avatar-container">
          <img
            src={props.users[props.polls[params.id].author].avatarURL}
            alt="avatar"
          />
        </div>
        <div className="choices">
          <form action="answer" className="wyr-options">
            <span>
              <input
                type="radio"
                value="optionOne"
                onChange={() => {
                  props.answer({
                    user: props.currentUserId,
                    qid: params.id,
                    answer: "optionOne",
                  });
                }}
              />
              {`${props.polls[params.id].optionOne.text}`}
            </span>
            <span>
              <input
                type="radio"
                value="optionTwo"
                onChange={() => {
                  props.answer({
                    user: props.currentUserId,
                    qid: params.id,
                    answer: "optionTwo",
                  });
                }}
              />
              {`${props.polls[params.id].optionTwo.text}`}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ polls, users, currentUser }) => ({
  polls,
  users,
  currentUserId: currentUser.id,
});
const mapDispatchToProps = (dispatch) => ({
  answer: ({ user, qid, answer }) => {
    dispatch(handleAnswerPoll({ user, qid, answer }));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AnswerPoll);
