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

    // instagram

    async function instaData() {
      const url = `https://instagram-profile1.p.rapidapi.com/getprofile/${userEnterData}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7f65b4cfb0msh13852740b710562p14a7e4jsnc1abbfd77422",
          "X-RapidAPI-Host": "instagram-profile1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        // const fetchedDataByUser = result.map((item) => item);
        dispatch({ type: "update", value: result });
        dispatch({ type: "show", show: true });
      } catch (error) {
        console.error(error);
      }
    }
    instaData();
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
