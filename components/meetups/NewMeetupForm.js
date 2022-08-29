import { useRef, useState } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const allDriveCert = [
  { name: "輕型機車駕照", checked: false, value: 1 },
  { name: "普通重型機車駕照", checked: false, value: 2 },
  { name: "大型重型機車駕照", checked: false, value: 4 },
  { name: "普通小型車駕照", checked: false, value: 8 },
  { name: "普通大貨車駕照", checked: false, value: 16 },
  { name: "普通大客車駕照", checked: false, value: 32 },
  { name: "普通聯結車駕照", checked: false, value: 64 },
  { name: "職業小型車駕照", checked: false, value: 128 },
  { name: "職業大貨車駕照", checked: false, value: 256 },
  { name: "職業大客車駕照", checked: false, value: 512 },
  { name: "職業聯結車駕照", checked: false, value: 1024 },
];

export const Checkbox = ({ isChecked, label, checkHandler, index, value }) => {
  let checkedList = [];
  const updateCheckStatus = (event) => {
    const { value, checked } = event.target;
    if (checked === true) {
      checkedList.push(value);
    }
  };
  
  return (
    <div className={classes.col1}>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        value={value}
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor={`checkbox-${index}`}>{label}</label>
    </div>
  );
};


function NewMeetupForm(props) {
  
  //AC
  const familyNameInputRef = useRef();
  const firstNameInputRef = useRef();
  const identityInputRef = useRef();
  const birthYearInputRef = useRef();
  const birthMonthInputRef = useRef();
  const birthDateInputRef = useRef();
  const genderInputRef = useRef();
  const cellphoneInputRef = useRef();
  const emailInputRef = useRef();
  //個人資料
  const cityInputRef = useRef();
  const streetInputRef = useRef();
  const jobStatusInputRef = useRef();
  const militaryInputRef = useRef();
  const honoraryDischargeYearInputRef = useRef();
  const honoraryDischargeMonthInputRef = useRef();
  const bioInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    //AC
    const enteredFamilyName = familyNameInputRef.current.value;
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredIdentity = identityInputRef.current.value;
    const enteredBirthYear = birthYearInputRef.current.value;
    const enteredBirthMonth = birthMonthInputRef.current.value;
    const enteredBirthDate = birthDateInputRef.current.value;
    const enteredGender = genderInputRef.current.checked;
    const enteredCellphone = cellphoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    //個人資料
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredJobStatus = jobStatusInputRef.current.checked;
    const enteredMilitary = militaryInputRef.current.checked;
    const enteredHonoraryDischargeYear =
      honoraryDischargeYearInputRef.current.value;
    const enteredHonoraryDischargeMonth =
      honoraryDischargeMonthInputRef.current.value;
    // const enteredDriveCert =driveCertInputRef.current.checked;
    const enteredBio = bioInputRef.current.value;

    const meetupData = {
      familyName: enteredFamilyName,
      firstName: enteredFirstName,
      identity: enteredIdentity,
      birthYear: enteredBirthYear,
      birthMonth: enteredBirthMonth,
      birthDate: enteredBirthDate,
      sex: +enteredGender,
      cellphone: enteredCellphone,
      email: enteredEmail,
      city: +enteredCity,
      street: enteredStreet,
      jobStatus: +enteredJobStatus,
      military: +enteredMilitary,
      honoraryDischargeYear: enteredHonoraryDischargeYear,
      honoraryDischargeMonth: enteredHonoraryDischargeMonth,
      // driveCert:enteredDriveCert,
      bio: enteredBio,
    };

    // console.log(driveCertInputRef);
    console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>基本資料</h1>
        {/* 姓名 */}
        <div className={`${classes.control} + ${classes.col2}`}>
          <div>
            <label htmlFor="familyName">姓</label>
            <input type="text" id="familyName" ref={familyNameInputRef} />
          </div>
          <div>
            <label htmlFor="firstName">名</label>
            <input type="text" id="firstName" ref={firstNameInputRef} />
          </div>
        </div>
        {/* 身分證 */}
        <div className={classes.control}>
          <label htmlFor="identity">身分證</label>
          <input type="text" id="identity" ref={identityInputRef} />
        </div>
        {/* 生日 */}
        <div className={`${classes.control} + ${classes.col3}`}>
          <div>
            <label htmlFor="birthYear">生日年</label>
            <input type="number" id="birthYear" ref={birthYearInputRef} />
          </div>
          <div>
            <label htmlFor="birthMonth">生日月</label>
            <select id="birthMonth" ref={birthMonthInputRef}>
              <option value="1">1月</option>
              <option value="2">2月</option>
              <option value="3">3月</option>
              <option value="4">4月</option>
              <option value="5">5月</option>
              <option value="6">6月</option>
              <option value="7">7月</option>
              <option value="8">8月</option>
              <option value="9">9月</option>
              <option value="10">10月</option>
              <option value="11">11月</option>
              <option value="12">12月</option>
            </select>
          </div>
          <div>
            <label htmlFor="birthDate">生日日</label>
            <input type="number" id="birthDate" ref={birthDateInputRef} />
          </div>
        </div>
        {/* 性別 */}
        <div className={classes.control}>
          <label htmlFor="gender">性別</label>
        </div>
        <div>
          <div className={classes.col1}>
            <input
              name="gender"
              type="radio"
              id="girl"
              ref={genderInputRef}
              value="0"
              defaultChecked
            />
            <label htmlFor="gril">女</label>
          </div>
          <div className={classes.col1}>
            <input
              name="gender"
              type="radio"
              id="boy"
              ref={genderInputRef}
              value="1"
            />
            <label htmlFor="boy">男</label>
          </div>
        </div>
        {/* 手機 */}
        <div className={classes.control}>
          <label htmlFor="cellphone">手機</label>
          <input type="text" id="cellphone" ref={cellphoneInputRef} />
        </div>
        {/* Email */}
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" ref={emailInputRef} />
        </div>

        <h1>個人資料</h1>

        {/* 通訊地址 */}
        <div className={classes.control}>
          <label htmlFor="city">通訊地址-地區</label>
          <input type="number" id="city" ref={cityInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="street">通訊地址-地址</label>
          <input type="text" id="street" ref={streetInputRef} />
        </div>
        <div>
          {/* 就業狀態 */}
          <div className={classes.control}>
            <label htmlFor="jobStatus">就業狀態</label>
          </div>
          <div className={classes.col1}>
            <input
              name="jobStatus"
              type="radio"
              id="working"
              ref={jobStatusInputRef}
              value="1"
            />
            <label htmlFor="working">仍在職</label>
          </div>
          <div className={classes.col1}>
            <input
              name="jobStatus"
              type="radio"
              id="waiting"
              ref={jobStatusInputRef}
              value="2"
            />
            <label htmlFor="waiting">待業中</label>
          </div>
          <div className={classes.control}>
            <label htmlFor="military">兵役</label>
          </div>
          <div className={classes.col1}>
            <input
              name="military"
              type="radio"
              id="woman"
              ref={militaryInputRef}
              value="0"
            />
            <label htmlFor="woman">未曾設定或女性</label>
          </div>
          <div className={classes.col1}>
            <input
              name="military"
              type="radio"
              id="ending"
              ref={militaryInputRef}
              value="1"
            />
            <label htmlFor="ending">役畢</label>
          </div>
          <div className={classes.col1}>
            <input
              name="military"
              type="radio"
              id="retirement"
              ref={militaryInputRef}
              value="2"
            />
            <label htmlFor="retirement">屆退</label>
          </div>
          <div className={classes.col1}>
            <input
              name="military"
              type="radio"
              id="serving"
              ref={militaryInputRef}
              value="3"
            />
            <label htmlFor="serving">未役</label>
          </div>
          <div className={classes.col1}>
            <input
              name="military"
              type="radio"
              id="standby"
              ref={militaryInputRef}
              value="4"
            />
            <label htmlFor="standby">待役</label>
          </div>
          <div className={classes.col1}>
            <input
              name="military"
              type="radio"
              id="exempted"
              ref={militaryInputRef}
              value="5"
            />
            <label htmlFor="exempted">免役</label>
          </div>
        </div>
        {/* 退伍日期 */}
        <div className={`${classes.control} + ${classes.col2}`}>
          <div>
            <label htmlFor="honoraryDischargeYear">退伍年</label>
            <input
              type="number"
              id="honoraryDischargeYear"
              ref={honoraryDischargeYearInputRef}
            />
          </div>
          <div>
            <label htmlFor="honoraryDischargeMonth">退伍月</label>
            <select
              id="honoraryDischargeMonth"
              ref={honoraryDischargeMonthInputRef}
            >
              <option value="1">1月</option>
              <option value="2">2月</option>
              <option value="3">3月</option>
              <option value="4">4月</option>
              <option value="5">5月</option>
              <option value="6">6月</option>
              <option value="7">7月</option>
              <option value="8">8月</option>
              <option value="9">9月</option>
              <option value="10">10月</option>
              <option value="11">11月</option>
              <option value="12">12月</option>
            </select>
          </div>
        </div>
        {/* 駕駛執照 */}
        <div className={classes.control}>
          <label htmlFor="driveCert">駕駛執照</label>
        </div>
        {allDriveCert.map((driveCert, index) => (
          <Checkbox
            key={driveCert.name}
            checkHandler={updateCheckStatus}
            label={driveCert.name}
            index={index}
            value={driveCert.value}
          />
        ))}
        {/* 個人簡介 */}
        <div className={classes.control}>
          <label htmlFor="bio">個人簡介</label>
          <textarea type="text" id="bio" ref={bioInputRef} />
        </div>

        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
