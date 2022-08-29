import { useState } from "react";
import classes from "./NewMeetupForm.module.css";

const Checkbox = ({ type, label, index, value, getCheckedList }) => {
  const [checkedLists, setCheckList] = useState();

  function checkedListHandler(checkedList, type) {}
  let checkedList = [];
  const updateCheckStatus = (event) => {
    const { value, checked } = event.target;
    let isIncluded = checkedList.includes(value);

    if (checked === true && !isIncluded) {
      checkedList.push(value);
    } else if (checked === false && isIncluded) {
      checkedList = checkedList.filter((val) => val != value);
    }
    setCheckList((prev)=>{
        return {
            ...prev,
            [type]:checkedList
        }
    })
    getCheckedList(checkedLists);
  };

  return (
    <div className={classes.col1}>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        value={value}
        onChange={updateCheckStatus}
      />
      <label htmlFor={`checkbox-${index}`}>{label}</label>
    </div>
  );
};

export default Checkbox;
