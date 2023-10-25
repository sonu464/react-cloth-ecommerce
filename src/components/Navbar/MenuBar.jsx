import React from "react";
import classes from "./MenuBar.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/redux";

function MenuBar() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className={classes.menuContainer}>
      <div className={classes.menuLinks}>
        <li>Home</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Products</li>
      </div>
      <div className={classes.logout}>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
}

export default MenuBar;
