import React from "react";
import classes from "./PageBar.module.css";
import leftArrow from "./Images/left-arrow.png";
import rightArrow from "./Images/next.png";
import doubleLeftArrow from "./Images/double-left-arrows-symbol.png";
import doubleRightArrow from "./Images/fast-forward.png";

function PageBar() {
  const rightButton = (e) => {};
  return (
    <div className={classes.page}>
      <button className={classes.button}>
        {" "}
        <img src={leftArrow} alt="left-arrow" />
      </button>
      <button className={classes.button}>
        {" "}
        <img src={doubleLeftArrow} alt="double-left-arrow" />
      </button>
      <button className={classes.button}>1</button>
      <button className={classes.button}>2</button>
      <button className={classes.button}>3</button>
      <button className={classes.button}>4</button>
      <button className={classes.button}>5</button>

      <button onClick={rightButton} className={classes.button}>
        {" "}
        <img src={rightArrow} alt="right-arrow" />
      </button>
      <button className={classes.button}>
        {" "}
        <img src={doubleRightArrow} alt="double-right-arrow" />
      </button>
    </div>
  );
}

export default PageBar;
