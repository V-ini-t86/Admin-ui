import React from "react";
import { useStateValue } from "../../StateProvider";
import classes from "./HeadList.module.css";
import List from "./List";
function HeadList() {
  const [initialState] = useStateValue();
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
        {initialState.adminData &&
          initialState.adminData.map((val, i) => {
            return i < 10 && <List key={i} adata={val} />;
          })}
      </ul>
    </div>
  );
}

export default HeadList;
