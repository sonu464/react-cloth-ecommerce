import React from "react";
import classes from "./ScrollBar.module.css";

import ProductInfo from "../../ProductInfo/ProductInfo";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../../store/redux";

function ScrollBar() {
  const dispatch = useDispatch();
  const showAllProductBox = useSelector((state) => state.showAllProduct);

  const allProductHandler = () => {
    dispatch(productAction.showAllProduct());
  };

  return (
    <React.Fragment>
      <div className={classes.scrollBarWrapper}>
        <div className={classes.ScrollBar}>
          <li onClick={allProductHandler}>All</li>
          <li>Man Clothes</li>
          <li>Woman Clothes</li>
          <li>Winter Clothes</li>
          <li>Summer Clothes</li>
          <li>Jeans</li>
          <li>Shirts</li>
          <li>Shoes</li>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ScrollBar;
