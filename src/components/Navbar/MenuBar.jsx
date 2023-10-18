import React from "react";
import classes from "./MenuBar.module.css";

function MenuBar(props) {
  return (
    <div className={classes.menuContainer}>
      <div className={classes.menuLinks}>
        <li>Home</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Products</li>
      </div>
    </div>
  );
}

export default MenuBar;
