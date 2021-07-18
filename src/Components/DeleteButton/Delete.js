import React from "react";
import { useStateValue } from "../../StateProvider";

function Delete(props) {
  const [{ selectedItems }, dispatch] = useStateValue();
  const deleteHandler = () => {
    dispatch({
      type: "DELETE_MULTIPLE_ITEM",
    });
  };

  return (
    <button className={props.className} onClick={deleteHandler}>
      Delete
    </button>
  );
}

export default Delete;
