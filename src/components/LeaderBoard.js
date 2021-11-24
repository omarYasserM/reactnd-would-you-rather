import React from "react";
import { connect } from "react-redux";
import "./leaderBoard.css";
import ScoreCard from "./ScoreCard";

function compareScores(a, b) {
  const aAnswered = Object.keys(a.answers).length;
  const aQuestions = a.questions.length;
  const aTotal = aAnswered + aQuestions;

  const bAnswered = Object.keys(b.answers).length;
  const bQuestions = b.questions.length;
  const bTotal = bAnswered + bQuestions;

  if (aTotal < bTotal) {
    return 1;
  }
  if (aTotal > bTotal) {
    return -1;
  }
  return 0;
}

function LeaderBoard(props) {
  return (
    <div className="leaderboard">
      <h1>LeaderBoard</h1>
      {Object.values(props.users)
        .sort(compareScores)
        .map((item) => (
          <ScoreCard key={item.id} user={props.users[item.id]} />
        ))}
    </div>
  );
}

const mapStateToProps = ({ users }) => ({
  users,
});
export default connect(mapStateToProps)(LeaderBoard);
