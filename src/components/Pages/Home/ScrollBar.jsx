import React from "react";
import classes from "./ScrollBar.module.css";

function ScrollBar() {
  return (
    <div className={classes.scrollBarWrapper}>
      <div className={classes.ScrollBar}>
        <li>All</li>
        <li>Man Clothes</li>
        <li>Woman Clothes</li>
        <li>Winter Clothes</li>
        <li>Summer Clothes</li>
        <li>Jeans</li>
        <li>Shirts</li>
        <li>Shoes</li>
      </div>
    </div>
  );
}

export default ScrollBar;
