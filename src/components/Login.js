import React from "react";
import { connect } from "react-redux";
import { signIn } from "../actions/currentUser";

function Login(props) {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <select
          name="users"
          id="users"
          onChange={(e) => {
            props.signIn(props.users[e.target.value]);
          }}
        >
          <option value="noOpt">Pick a user</option>
          {props.users
            ? Object.keys(props.users).map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))
            : null}
        </select>
      </form>
    </div>
  );
}

const mapStateToProps = ({ users }) => ({
  users,
});
const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(signIn(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
