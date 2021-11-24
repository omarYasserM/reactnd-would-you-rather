import AddPoll from "./AddPoll";
import "./App.css";
import NavBar from "./NavBar";
import Polls from "./Polls";
import LeaderBoard from "./LeaderBoard";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchAPIData } from "../actions/shared";
import { signIn } from "../actions/currentUser";
import Login from "./Login";
import LoadingBar from "react-redux-loading";
import QuestionRouting from "./QuestionRouting";

function App(props) {
  useEffect(() => {
    props.getUsers();
  }, []);

  return (
    <div className="App">
      <LoadingBar />

      {props.currentUser !== null ? (
        <>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Polls />} />
            <Route exact path="/add" element={<AddPoll />} />
            <Route path="/question/:id" element={<QuestionRouting />} />
            <Route exact path="/leaderboard" element={<LeaderBoard />} />
          </Routes>
        </>
      ) : (
        <Login />
        // using it without a route helps not getting the URL lost
        // if someone navigate by typing URL..it will ask for login and do the process
        //  without navigating out
      )}

      {/* <AnswerPoll/>
      <AddPoll/> */}

      {/* <Result/> */}
    </div>
  );
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  getUsers: () => {
    dispatch(fetchAPIData());
  },
  signIn: (user) => {
    dispatch(signIn(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
