import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import SearchItem from "./SearchItem";
import MenuBar from "./MenuBar";
import ScrollBar from "../Pages/Home/ScrollBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const [showLinkBox, setShowLinkBox] = useState(true);
  const [showMenuBox, setShowMenuBox] = useState(true);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    props.cartValue(showCart);
  }, [showCart]);

  const receiveDataFromChild = (data) => {
    if (data) {
      setShowLinkBox(false);
    } else {
      setShowLinkBox(true);
    }
  };

  const hemburgerHandler = () => {
    setShowMenuBox((prevValue) => !prevValue);
  };

  const cartHandler = () => {
    setShowCart((prevValue) => !prevValue);
  };

  const menuClasses = showMenuBox
    ? classes.menuBox
    : `${classes.menuBox} ${classes.menuBoxShow}`;

  const navLinkData = (
    <div className={classes.navLinkItem}>
      <li>
        <a href="">Location</a>
      </li>
      {/* <li>
        <a href=""></a>
      </li> */}
      <li>
        <a href="">Sign</a>
      </li>
    </div>
  );

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarWrapper}>
        <div className={classes.logo}>
          <h1>ClothesWeb</h1>
        </div>
        <div className={classes.navLinks}>
          {showLinkBox && navLinkData}
          <div className={classes.cartContainer}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className={classes.cart}
              onClick={cartHandler}
            />
          </div>
          <div className={classes.searchContainer}>
            <SearchItem sendDataToParent={receiveDataFromChild} />
          </div>
        </div>
        <div className={classes.hemburger}>
          <FontAwesomeIcon
            className={classes.hemburgerIcon}
            icon={faBars}
            onClick={hemburgerHandler}
          />
        </div>
      </div>

      <div className={menuClasses}>
        <MenuBar />
      </div>
      <div className={classes.scrollBarProduct}>
        <ScrollBar />
      </div>
    </nav>
  );
}

export default Navbar;
