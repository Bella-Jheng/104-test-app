import { useRef, useState, useEffect } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import Checkbox from "./Checkbox";

const allDriveCert = [
  { name: "輕型機車駕照", value: 1 },
  { name: "普通重型機車駕照", value: 2 },
  { name: "大型重型機車駕照", value: 4 },
  { name: "普通小型車駕照", value: 8 },
  { name: "普通大貨車駕照", value: 16 },
  { name: "普通大客車駕照", value: 32 },
  { name: "普通聯結車駕照", value: 64 },
  { name: "職業小型車駕照", value: 128 },
  { name: "職業大貨車駕照", value: 256 },
  { name: "職業大客車駕照", value: 512 },
  { name: "職業聯結車駕照", value: 1024 },
];

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
  //學歷
  const schoolNameInputRef = useRef();
  const highestEduInputRef = useRef();
  const departmentsNameInputRef = useRef([]);
  const departmentsTypeInputRef = useRef([]);

  const [checkedLists, setCheckLists] = useState({});
  const checkedListHandler = (checkedList, type) => {
    setCheckLists((prevState) => ({
      ...prevState,
      [type]: checkedList,
    }));
  };

  const [departmentList, setDepartmentList] = useState([]);
  const Department = ()=>{
    return (
      <div className={`${classes.control} + ${classes.col2}`}>
        <div>
      <label htmlFor="departmentsName">科系名稱​​</label>
      <input
        type="text"
        required
        id="departmentsName"
        ref={val => departmentsNameInputRef.current[departmentList.length+1]=val}
      />
    </div>
    <div>
      <label htmlFor="departmentsType">科系類別</label>
      <input
        type="number"
        required
        id="departmentsType"
        ref={val => departmentsTypeInputRef.current[departmentList.length+1]=val}
      />
    </div>
    </div>);
  }
  const addDepartmentHandler = ()=>{
    setDepartmentList(departmentList.concat(<Department key={departmentList.length+1}/>))
  }

  const departmentsHandler=()=>{
    let department =[];
    const departmentNames = departmentsNameInputRef.current;
    const departmentTypes = departmentsTypeInputRef.current;

    for( let i=0 ; i< departmentNames.length; i++){
      let obj = {
        name:departmentNames[1].value,
        type:[departmentTypes[1].value]
      }
      department.push(obj)
    }
    return department;
  }

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
    const enteredDriveCert = checkedLists.driveCert;
    const enteredBio = bioInputRef.current.value;
    //學歷
    const enteredSchoolName = schoolNameInputRef.current.value;
    const enteredSchoolHightest = highestEduInputRef.current.checked;
    const department = departmentsHandler()


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
      driveCert: enteredDriveCert,
      bio: enteredBio,
      name: enteredSchoolName,
      highest: +enteredSchoolHightest,
      department:department,
    };

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
            type="driveCert"
            label={driveCert.name}
            index={index}
            value={driveCert.value}
            getCheckedList={checkedListHandler}
          />
        ))}
        {/* 個人簡介 */}
        <div className={classes.control}>
          <label htmlFor="bio">個人簡介</label>
          <textarea type="text" id="bio" ref={bioInputRef} />
        </div>

        <h1>學歷</h1>
        {/* 學校名稱 */}
        <div className={classes.control}>
          <label htmlFor="schoolName">學校名稱​</label>
          <input type="text" id="schoolName" ref={schoolNameInputRef} />
        </div>
        {/* 最高學歷 */}
        <div className={classes.control}>
          <label htmlFor="highestEdu">最高學歷</label>
          <select id="highestEdu" ref={highestEduInputRef}>
            <option value="1">博士</option>
            <option value="2">碩士</option>
            <option value="3">大學</option>
            <option value="4">四技</option>
            <option value="5">二技</option>
            <option value="6">二專</option>
            <option value="7">三專</option>
            <option value="8">五專</option>
            <option value="9">高中</option>
            <option value="10">高職</option>
            <option value="11">國中(含)以下</option>
          </select>
        </div>
        {/* 科系名稱、類別​ */}
        <div className={`${classes.control} + ${classes.col2}`}>
          <div>
            <label htmlFor="departmentsName">科系名稱​​</label>
            <input
              type="text"
              required
              id="departmentsName"
              ref={val => departmentsNameInputRef.current[0]=val}
            />
          </div>
          <div>
            <label htmlFor="departmentsType">科系類別</label>
            <input
              type="number"
              required
              id="departmentsType"
              ref={val => departmentsTypeInputRef.current[0]=val}
            />
          </div>
        </div>
        {departmentList}
          <div onClick={addDepartmentHandler}>+ 新增科系</div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
