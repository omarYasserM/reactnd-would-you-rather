import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { handleAddPoll } from "../actions/polls";
import "./addPoll.css";

function AddPoll(props) {
  const navigate = useNavigate();
  const [option, setOption] = useState({ optionOne: "", optionTwo: "" });
  useEffect(() => {
    console.log(option);
  }, [option]);
  return (
    <div className="add-poll">
      <h1>Create new question</h1>
      <hr />
      <span>Would you rather</span>
      <form action="create">
        <input
          type="text"
          placeholder="option 1"
          onChange={(e) => {
            setOption({
              optionOne: e.target.value,
              optionTwo: option.optionTwo,
            });
          }}
        />
        <span>OR</span>
        <input
          type="text"
          placeholder="option 2"
          onChange={(e) => {
            setOption({
              optionOne: option.optionOne,
              optionTwo: e.target.value,
            });
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            props.handleAdd({
              optionOneText: option.optionOne,
              optionTwoText: option.optionTwo,
              author: props.author,
            });
            navigate("/");
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ currentUser }) => ({
  author: currentUser.id,
});
const mapDispatchToProps = (dispatch) => ({
  handleAdd: (poll) => dispatch(handleAddPoll(poll)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPoll);
