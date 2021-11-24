import React, { useState } from "react";
import { connect } from "react-redux";
import "./polls.css";
import Question from "./Question";

function Polls(props) {
  const [pollsType, setPollsType] = useState("unanswered");
  return (
    <div className="polls">
      <div className="options">
        <div
          className={`unanswered ${
            pollsType === "unanswered" ? "active-polls" : undefined
          }`}
          onClick={() => {
            setPollsType("unanswered");
          }}
        >
          unanswered Questions
        </div>
        <div
          className={`answered ${
            pollsType === "answered" ? "active-polls" : undefined
          }`}
          onClick={() => {
            setPollsType("answered");
          }}
        >
          answered Questions
        </div>
      </div>
      <div className="questions-list">
        {pollsType === "unanswered"
          ? Object.keys(props.polls)
              .filter((item) => !(item in props.answeredPolls))
              .map((item) => (
                <Question
                  key={item}
                  poll={props.polls[item]}
                  answered={false}
                />
              ))
          : Object.keys(props.polls)
              .filter((item) => item in props.answeredPolls)
              .map((item) => (
                <Question key={item} poll={props.polls[item]} answered={true} />
              ))}
      </div>
    </div>
  );
}

const mapStateToProps = ({ currentUser, polls }) => ({
  answeredPolls: currentUser.answers,
  polls,
});

export default connect(mapStateToProps)(Polls);
