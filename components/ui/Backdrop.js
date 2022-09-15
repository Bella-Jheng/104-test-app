import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {

  return <div className={classes.Backdrop +' '+ `${props.show?classes.BackdropOpen:classes.BackdropClose}`}></div>;
};

export default Backdrop;
