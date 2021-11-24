import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { signOut } from "../actions/currentUser";
import "./navBar.css";

function NavBar(props) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="navBar">
      <div className="left">
        <ul>
          <li
            className={location.pathname === "/" ? "active" : undefined}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className={location.pathname === "/add" ? "active" : undefined}
            onClick={() => {
              navigate("/add");
            }}
          >
            new poll
          </li>
          <li
            className={
              location.pathname === "/leaderboard" ? "active" : undefined
            }
            onClick={() => {
              navigate("/leaderboard");
            }}
          >
            Leaderboard
          </li>
        </ul>
      </div>
      <div className="right">
        <span>
          Logged in as <b>{props.currentUser.name}</b>
        </span>
        <div className="avatar-container">
          <img src={props.currentUser.avatarURL} alt="avatar" />
        </div>
        <button
          className="logout-button"
          onClick={() => {
            props.signOut();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: (user) => dispatch(signOut(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
