import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import React, { useCallback } from "react";
import classes from "./Cart.module.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartEmpty = cartItems.length === 0;

  return (
    <div className={classes.cartWrapper}>
      {cartEmpty && (
        <div className={classes.cartEmpty}>
          <div className={classes.cartImg}>
            <img src="/cart.png" alt="Cart Is Empty" />
          </div>
          <div className={classes.cartText}>
            <h1>Your cart is empty!</h1>
          </div>
          <div className={classes.cartBtnShopAgain}>
            <h1>Shop Now</h1>
          </div>
        </div>
      )}
      {!cartEmpty && (
        <ul className={classes.Cart}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                price: item.price,
                total: item.totalPrice,
                quantity: item.quantity,
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
