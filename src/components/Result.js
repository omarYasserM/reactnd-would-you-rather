import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import "./result.css";

function Result(props) {
  const params = useParams();
  const userAnswer = props.currentUser.answers[params.id];
  const optionOneVotes = props.polls[params.id].optionOne.votes.length;
  const optionTwoVotes = props.polls[params.id].optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const author = props.users[props.polls[params.id].author];
  const Op1P = ((optionOneVotes * 100) / totalVotes).toFixed(2);
  const Op2P = ((optionTwoVotes * 100) / totalVotes).toFixed(2);

  return (
    <div className="result">
      <div className="name">
        <span>
          <b>{author.name}</b> asked: would you rather
        </span>
      </div>
      <div className="wyr">
        <div className="q-avatar-container">
          <img src={author.avatarURL} alt="avatar" />
        </div>
        <div className="results">
          <span className="user-answer">
            your answer was{" "}
            {userAnswer === "optionOne" ? "Option 1" : "Option 2"}
          </span>
          <span>
            <b>Option 1:</b> {props.polls[params.id].optionOne.text} (
            {optionOneVotes} vote : {Op1P}%)
          </span>
          <span>
            <b>Option 2:</b> {props.polls[params.id].optionTwo.text} (
            {optionTwoVotes} vote : {Op2P}
            %)
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ polls, currentUser, users }) => ({
  polls,
  currentUser,
  users,
});

export default connect(mapStateToProps)(Result);
