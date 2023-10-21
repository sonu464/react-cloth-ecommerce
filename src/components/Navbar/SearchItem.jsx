import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./SearchItem.module.css";

function SearchItem(props) {
  const [showSearchBox, setShowSearchBox] = useState(true);
  const [labelText, setLabelText] = useState("Search");
  const [userEnterData, setUserEnterData] = useState("");
  // const [fetchedData, setFetchedData] = useState([]);
  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    const inputData = event.target.value;
    setUserEnterData(inputData);
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("apikey", "S49Xn72MOQlDBOnoKDbUllLamipZaCgF");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/spoonacular/food/menuItems/search?query=${userEnterData}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const fetchedDataByUser = result.menuItems.map((item) => item);
        dispatch({ type: "update", value: fetchedDataByUser });
      })
      .catch((error) => console.log("error", error));
  };

  // show searchHandler
  const showSearchHandler = () => {
    setShowSearchBox((prevValue) => !prevValue);
    if (showSearchBox) {
      setLabelText("Cancel");
    } else {
      setLabelText("Search");
    }

    props.sendDataToParent(showSearchBox);
  };

  return (
    <form onSubmit={searchSubmitHandler} className={classes.searchForm}>
      {!showSearchBox && (
        <input
          type="search"
          id="search"
          className={classes.search}
          placeholder="Jeans,Pents,Shoes..."
          value={userEnterData}
          onChange={inputChangeHandler}
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
