import React, { useState } from "react";
import classes from "./SearchBar.module.css";
function SearchBar() {
  const [search, setSearch] = useState();
  const inputHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <input
      className={classes.search}
      type="text"
      placeholder="Search by Email,role and Name"
      value={search}
      onChange={inputHandler}
    />
  );
}

export default SearchBar;
