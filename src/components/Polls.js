import React, { useState } from "react";
import { connect } from "react-redux";
import "./polls.css";
import Question from "./Question";

function compareTimestamps(a, b) {
  const at = a.timestamp;
  const bt = b.timestamp;

  if (at < bt) {
    return 1;
  }
  if (at > bt) {
    return -1;
  }
  return 0;
}

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
          ? Object.values(props.polls)
              .filter((item) => !(item.id in props.answeredPolls))
              .sort(compareTimestamps)
              .map((item) => (
                <Question
                  key={item.id}
                  poll={props.polls[item.id]}
                  answered={false}
                />
              ))
          : Object.values(props.polls)
              .filter((item) => item.id in props.answeredPolls)
              .sort(compareTimestamps)
              .map((item) => (
                <Question
                  key={item.id}
                  poll={props.polls[item.id]}
                  answered={true}
                />
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
