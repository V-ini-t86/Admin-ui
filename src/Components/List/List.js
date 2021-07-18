import React from "react";
import { useStateValue } from "../../StateProvider";
import classes from "./HeadList.module.css";
import deleteIcon from "./Images/delete.png";
function List(props) {
  const [{ selectedItems }, dispatch] = useStateValue();
  const val = props.adata;
  const checkboxHandler = (e) => {
    e.target.checked === true && selectedItems.push(e.target.id);
  };

  const deleteSingleList = (e) => {
    // console.log();
    dispatch({
      type: "DELETE_SINGLE_ITEM",
      id: e.target.name,
    });
  };

  return (
    <React.Fragment>
      <li className={classes.nli}>
        <span>
          <input type="checkbox" id={val.id} onClick={checkboxHandler} />
        </span>
        <span>{val.name}</span>
        <span>{val.email}</span>
        <span>{val.role}</span>
        <span>
          <button className={classes.buttonIcon} onClick={deleteSingleList}>
            <img src={deleteIcon} name={val.id} alt="" />
          </button>
        </span>
      </li>
      <hr />
    </React.Fragment>
  );
}

export default List;
