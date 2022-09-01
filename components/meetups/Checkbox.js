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
    const index = checkedList.indexOf(value);
    const isIncluded = index > -1

    if (checked && !isIncluded) {
      checkedList.push(value);
    } else if (!checked && isIncluded) {
      checkedList.splice(index,1)
    }
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
