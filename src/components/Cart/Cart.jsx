import React from "react";
import classes from "./Cart.module.css";

function Cart() {
  return (
    <div className={classes.cartWrapper}>
      <div className={classes.cartEmpty}>
        <div className={classes.cartImg}>
          <img src="/public/cart.png" alt="Cart Is Empty" />
        </div>
        <div className={classes.cartText}>
          <h1>Your cart is empty!</h1>
        </div>
        <div className={classes.cartBtnShopAgain}>
          <h1>Shop Now</h1>
        </div>
      </div>
    </div>
  );
}

export default Cart;
