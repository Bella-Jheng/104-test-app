import classes from "./NewMeetupForm.module.css";

let driveCert = [];
let jobTimePeriod = [];
const Checkbox = ({ name, id, label, value, getCheckedList }) => {
  const updateCheckStatus = (event) => {
    const { value, checked } = event.target;

    switch (name) {
      case "driveCert":
        deliverList(driveCert, +value, checked);
        break;
      default:
        deliverList(jobTimePeriod, +value, checked);
        break;
    }
    getCheckedList({ driveCert, jobTimePeriod });
  };

  const deliverList = (checkedList, value, checked) => {
    let isIncluded = checkedList.includes(value);

    if (checked && !isIncluded) {
      checkedList.push(value);
    } else if (!checked && isIncluded) {
      checkedList.filter((val) => val !== value)
    }
    console.log(checkedList)
    return checkedList;
  };

  return (
    <div className={classes.col1}>
      <input
        name={name}
        type="checkbox"
        id={id}
        value={value}
        onChange={updateCheckStatus}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
