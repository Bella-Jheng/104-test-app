import { useRef } from "react";
import classes from "./Input.module.css";

function Input(props) {
    const inputProp = useRef();

  return (
    <div className={props.className} >
      <label htmlFor={props.id}>{props.labelName}</label>
      <input type={props.type} required id={props.id} ref={inputProp} />
    </div>
  );
}

export default Input;
