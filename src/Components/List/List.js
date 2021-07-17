import React from "react";
import classes from "./HeadList.module.css";
import deleteIcon from "./Images/delete.png";
function List(props) {
  const val = props.adata;
  return (
    <React.Fragment>
      <li className={classes.nli}>
        <span>
          <input type="checkbox" />
        </span>
        <span>{val.name}</span>
        <span>{val.email}</span>
        <span>{val.role}</span>
        <span>
          <button className={classes.buttonIcon}>
            <img src={deleteIcon} alt="" />
          </button>
        </span>
      </li>
      <hr />
    </React.Fragment>
  );
}

export default List;
