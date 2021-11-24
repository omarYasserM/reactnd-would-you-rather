import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./question.css";

function Question(props) {
  return (
    <div className="question">
      <div className="name">
        <span>
          <b>{props.users[props.poll.author].name}</b> asked:
        </span>
      </div>
      <div className="wyr">
        <div className="q-avatar-container">
          <img src={props.users[props.poll.author].avatarURL} alt="avatar" />
        </div>
        <div className="choices">{props.poll.optionOne.text} or ...</div>
        <Link to={`/question/${props.poll.id}`}>
          {props.answered ? "Results" : "Answer"}
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Question);
