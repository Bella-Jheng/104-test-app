import classes from "./NewMeetupForm.module.css";

const Radio = (props) => {
    const radioHandler =(e) => {
        let radioValue = e.target.value
        props.onChange(radioValue,props.name)
    }

  return (
    <div className={classes.col1}>
      <input
        name={props.name}
        type="radio"
        id={props.id}
        value={props.value}
        onChange={radioHandler}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Radio;
