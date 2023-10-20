import React, { useState } from "react";
import classes from "./Home.module.css";
import Navbar from "../../Navbar/Navbar";
import Cart from "../../Cart/Cart";
import ScrollBar from "./ScrollBar";

function Home() {
  const [showCartBox, setShowCartBox] = useState(false);

  const cartValueReceivedByApp = (data) => {
    if (data) {
      setShowCartBox(true);
    } else {
      setShowCartBox(false);
    }
  };
  return (
    <section className={classes.homeWrapper}>
      <Navbar cartValue={cartValueReceivedByApp} />
      {showCartBox && <Cart />}
      <ScrollBar />
      <div className={classes.homebg}>
        <img src="/public/homebg1.jpg" alt="" />
      </div>
      <div className={classes.homeItem}>
        <h1>Best product all over world</h1>
      </div>
      <div className={classes.homeProducts}>
        <div className={classes.homeProductsWrapper}>
          <div className={classes.homeProduct}>
            <h1>Starting ₹349 | Bestselling shoes</h1>
            <div className={classes.productImg}>
              <img src="/public/product1.jpg" alt="" />
            </div>
          </div>
          <div className={classes.homeProduct}>
            <h1>Starting ₹349 | Bestselling shoes</h1>
            <div className={classes.productImg}>
              <img src="/public/product1.jpg" alt="" />
            </div>
          </div>
          <div className={classes.homeProduct}>
            <h1>Starting ₹349 | Bestselling shoes</h1>
            <div className={classes.productImg}>
              <img src="/public/product1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
