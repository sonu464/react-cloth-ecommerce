import React, { useState } from "react";
import classes from "./Home.module.css";
import Navbar from "../../Navbar/Navbar";
import Cart from "../../Cart/Cart";
// import SearchedItem from "../../SearchedItem/SearchedItem";
import AllProduct from "../../Product/AllProduct/AllProduct";
import { useSelector } from "react-redux";

function Home(props) {
  const [showCartBox, setShowCartBox] = useState(false);
  // const [searchItem, setSearchItem] = useState([]);
  const showAllProduct = useSelector((state) => state.showAllProduct);

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
      <div className={classes.homebg}>
        <img src="/homebg1.jpg" alt="" />
      </div>
      <div className={classes.homeItem}>
        <h1>Best product all over world</h1>
      </div>
      <div className={classes.homeProducts}>
        <div className={classes.homeProductsWrapper}>
          <div className={classes.homeProduct}>
            <h1>Starting ₹349 | Bestselling shoes</h1>
            <div className={classes.productImg}>
              <img src="/product1.jpg" alt="" />
            </div>
          </div>
          <div className={classes.homeProduct}>
            <h1>Starting ₹349 | Bestselling shoes</h1>
            <div className={classes.productImg}>
              <img src="/product1.jpg" alt="" />
            </div>
          </div>
          <div className={classes.homeProduct}>
            <h1>Starting ₹349 | Bestselling shoes</h1>
            <div className={classes.productImg}>
              <img src="/product1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {showAllProduct && <AllProduct />}
      {/* <SearchedItem searchDataByUser={searchItem} /> */}
    </section>
  );
}

export default Home;
