import React from "react";
import "./scoreCard.css";

export default function ScoreCard(props) {
  const answered = Object.keys(props.user.answers).length;
  const questions = props.user.questions.length;
  return (
    <div className="score-card">
      <div className="q-avatar-container">
        <img src={props.user.avatarURL} alt="avatar" />
      </div>
      <div className="score-info">
        <h2>{props.user.name}</h2>
        <span>answered questions: {answered}</span>
        <span>asked questions: {questions}</span>
      </div>
      <div className="score-number">
        <span>score</span>
        <hr />
        <b>{answered + questions}</b>
      </div>
    </div>
  );
}
