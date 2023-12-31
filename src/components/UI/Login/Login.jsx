import React from "react";
import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/redux";

function Login() {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <div className={classes.loginFormContainer}>
      <div className={classes.sign}>
        {/* <div className={classes.signUp}>
          <h1>Sign up</h1>
        </div> */}
      </div>
      <h1> Log In</h1>
      <form onSubmit={loginHandler} className={classes.loginForm}>
        <div className={classes.loginEmail}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className={classes.loginPass}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button className={classes.loginFornBtn}>Login</button>
      </form>
    </div>
  );
}

export default Login;
