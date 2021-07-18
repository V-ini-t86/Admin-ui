import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import classes from "./SearchBar.module.css";
function SearchBar({ onChange }) {
  var [initialState, dispatch] = useStateValue();
  const [search, setSearch] = useState("");
  const inputHandler = (e) => {
    // searchData = e.target.value;
    setSearch(e.target.value);
  };
  // console.log(search);
  if (search === "") {
    console.log("search");
    onChange();
  }
  const nameChangeHandler = () => {
    dispatch({
      type: "SEARCH_IN_LIST",
      searchData: search,
    });
  };

  const emailChangeHandler = () => {
    dispatch({
      type: "SEARCH_IN_LIST_BY_EMAIL",
      searchData: search,
    });
  };
  const roleChangeHandler = () => {
    dispatch({
      type: "SEARCH_IN_LIST_BY_ROLE",
      searchData: search,
    });
  };

  return (
    <div className={classes.search__container}>
      <input
        className={classes.search}
        type="text"
        placeholder="Search by Email,role and Name"
        value={search}
        onChange={inputHandler}
      />
      <button className={classes.btn} onClick={nameChangeHandler}>
        Name
      </button>
      <button className={classes.btn} onClick={emailChangeHandler}>
        Email
      </button>
      <button className={classes.btn} onClick={roleChangeHandler}>
        Role
      </button>
    </div>
  );
}

export default SearchBar;
