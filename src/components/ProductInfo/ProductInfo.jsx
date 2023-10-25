import React from "react";
import classes from "./ProductInfo.module.css";

import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../store/redux";

function ProductInfo(props) {
  return (
    <div className={classes.productInfo}>
      <div onClick={props.onClose} className={classes.closeProductInfo}>
        X
      </div>
      <div className={classes.productInfoContainer}>
        <div className={classes.productInfoLeft}>
          <img src={props.selectedProduct.image} alt="product" />
        </div>
        <div className={classes.productInfoRight}>
          <h1>{props.selectedProduct.title}</h1>
          <p>{props.selectedProduct.description}</p>
          <small>Categories - {props.selectedProduct.category}</small>
          <h2>Price - {props.selectedProduct.price}</h2>
          <h2>Rating - {props.selectedProduct.rating.rate}</h2>
          <div className={classes.productInfoBtn}>
            <div className={classes.productInfoOrderBtn}>Order Now</div>
            <div className={classes.productInfoCartBtn}>Add to Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
