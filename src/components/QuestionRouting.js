import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import AnswerPoll from "./AnswerPoll";
import NotFound from "./NotFound";
import Result from "./Result";

function QuestionRouting(props) {
  const params = useParams();
  if (!props.polls.includes(params.id)) return <NotFound />;
  if (params.id in props.currentUser.answers) return <Result />;
  else return <AnswerPoll />;
}

const mapStateToProps = ({ currentUser, polls }) => ({
  currentUser: currentUser,
  polls: Object.keys(polls),
});
export default connect(mapStateToProps)(QuestionRouting);
