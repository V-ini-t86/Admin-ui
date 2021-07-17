import React from "react";
import classes from "./HeadList.module.css";
import List from "./List";
function HeadList({ data }) {
  return (
    <div>
      <ul className={classes.ulist}>
        <li className={classes.li}>
          <span>
            <input type="checkbox" />
          </span>
          <span>Name</span>
          <span>Email</span>
          <span>Role</span>
          <span>Action</span>
        </li>
        <hr />
        {data &&
          data.map((val, i) => {
            return i < 11 && <List key={i} adata={val} />;
          })}
      </ul>
    </div>
  );
}

export default HeadList;
