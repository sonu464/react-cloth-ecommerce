import React, { useEffect, useState } from "react";
import classes from "./SearchedItem.module.css";

import { useSelector } from "react-redux";

function SearchedItem() {
  const data = useSelector((state) => state.yourReducer.data);
  return (
    <div className={classes.searchedItem}>
      <div className={classes.serchedItemWrapper}>
        <h1>Lorem ipsum dolor sit. </h1>
        <div className={classes.searchItems}>
          {data.map((item, id) => (
            <div key={id} className={classes.searchItem}>
              <img src={item.image} alt="" />
              <div className={classes.searchItemInfo}>
                <h1>{item.title}</h1>
                <h2>{item.restaurantChain}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchedItem;
