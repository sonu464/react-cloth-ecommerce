import React, { useState } from "react";
import classes from "./SearchItem.module.css";

function SearchItem(props) {
  const [showSearchBox, setShowSearchBox] = useState(true);
  const [labelText, setLabelText] = useState("Search");

  const showSearchHandler = () => {
    setShowSearchBox((prevValue) => !prevValue);
    if (showSearchBox) {
      setLabelText("Cancel");
    } else {
      setLabelText("Search");
    }

    props.sendDataToParent(showSearchBox);
  };

  let searchBoxCss = `${classes.search} `;
  if (showSearchBox) {
    searchBoxCss = `${classes.search} ${classes.searchAnimation}`;
  }

  return (
    <form className={classes.searchForm}>
      {!showSearchBox && (
        <input
          type="search"
          id="search"
          className={classes.search}
          placeholder="Jeans,Pents,Shoes..."
        />
      )}
      <label
        htmlFor="search"
        className={classes.searchBtn}
        onClick={showSearchHandler}
      >
        {labelText}
      </label>
    </form>
  );
}

export default SearchItem;
