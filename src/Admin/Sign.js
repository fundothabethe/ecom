import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/sign.css";
import { auth } from "./firebase";
import { user } from "./reducer";

function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [singIn, setSingIn] = useState("Sign Up");
  const [login, setLogin] = useState("Log In");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.state);
  const uuid = "4HDQoRufUyeudfNLSudX5WyJnNE2";

  const MESSAGE = (message, finalMessage) => {
    finalMessage === "Sign In"
      ? setSingIn(message)
      : finalMessage === "Log In"
      ? console.log(message)
      : setLogin("err");

    console.log(message);

    setTimeout(() => {
      finalMessage === "Sign In"
        ? setSingIn(finalMessage)
        : finalMessage === "Log In"
        ? setLogin(finalMessage)
        : console.log("err");
    }, 2000);
  };

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        //--------------success
        e.user.uid === uuid
          ? dispatch(user())
          : MESSAGE("NOT admin credentials", "Sign Up");
      }) //---------------------error
      .catch((err) => {
        MESSAGE(err.message, "Sign Up");
      });
    console.log(state);
    e.target.reset();
  };

  const logIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((e) => {
        e.user.uid === uuid
          ? dispatch(user())
          : MESSAGE("NOT admin credentials", "Log In");
      })
      .catch((err) => {
        MESSAGE(err.message, "Log In");
      });
    e.target.reset();
  };

  const form = () => (
    <>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        className="input"
        id="standard-basic"
        label="Email"
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        className="input"
        id="standard-basic"
        label="Password"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </>
  );

  return (
    <div className="sign">
      <h2>Admin sign in page</h2>
      <form onSubmit={signUp} className="sign-up">
        <h3 style={{ color: singIn !== "Sign Up" ? "red" : "" }}>{singIn}</h3>
        {form()}
      </form>
      <h4>OR</h4>
      <form onSubmit={logIn} className="log-in">
        <h3 style={{ color: login !== "Log In" ? "red" : "" }}>{login}</h3>
        {form()}
      </form>
    </div>
  );
}

export default Sign;
