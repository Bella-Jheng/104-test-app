import { useRef, useState } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import InputTags from "./TagInput";

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
const allJobTimePeriod = [
  { name: "日班", value: 1 },
  { name: "夜班", value: 2 },
  { name: "大夜班", value: 4 },
  { name: "假日班", value: 8 },
];

function NewMeetupForm(props) {
  //AC
  const familyNameInputRef = useRef();
  const firstNameInputRef = useRef();
  const identityInputRef = useRef();
  const birthYearInputRef = useRef();
  const birthMonthInputRef = useRef();
  const birthDateInputRef = useRef();
  const cellphoneInputRef = useRef();
  const emailInputRef = useRef();
  //個人資料
  const cityInputRef = useRef();
  const streetInputRef = useRef();
  const honoraryDischargeYearInputRef = useRef();
  const honoraryDischargeMonthInputRef = useRef();
  const bioInputRef = useRef();
  //學歷
  const schoolNameInputRef = useRef();
  const highestEduInputRef = useRef();
  const departmentsNameInputRef = useRef([]);
  const departmentsTypeInputRef = useRef([]);
  const eduDurationStartInputRef = useRef([]);
  const eduDurationEndInputRef = useRef([]);
  //工作經歷
  const companyNameInputRef = useRef();
  const workAreaInputRef = useRef();
  const jobNameInputRef = useRef();
  //求職條件
  const afterGetOfferInputRef = useRef();
  const preferJobTitleInputRef = useRef();
  const preferJobContentInputRef = useRef();
  //平台傳的指定頁面
  const returnUrlInputRef = useRef();

  const [checkedLists, setCheckLists] = useState({});
  const checkedListHandler = (checkedList, type) => {
    setCheckLists((prevState) => ({
      ...prevState,
      [type]: checkedList,
    }));
  };

  const [departmentList, setDepartmentList] = useState([]);
  const Department = () => {
    return (
      <div className={`${classes.control} + ${classes.col2}`}>
        <div>
          <label htmlFor="departmentsName">科系名稱​​</label>
          <input
            type="text"
            id="departmentsName"
            ref={(val) =>
              (departmentsNameInputRef.current[departmentList.length + 1] = val)
            }
          />
        </div>
        <div>
          <label htmlFor="departmentsType">科系類別</label>
          <input
            type="number"
            id="departmentsType"
            ref={(val) =>
              (departmentsTypeInputRef.current[departmentList.length + 1] = val)
            }
          />
        </div>
      </div>
    );
  };
  const addDepartmentHandler = () => {
    setDepartmentList(
      departmentList.concat(<Department key={departmentList.length + 1} />)
    );
  };

  const departmentsHandler = () => {
    let department = [];
    const departmentNames = departmentsNameInputRef.current;
    const departmentTypes = departmentsTypeInputRef.current;

    for (let i = 0; i < departmentNames.length; i++) {
      let obj = {
        name: departmentNames[i].value,
        type: [departmentTypes[i].value],
      };
      department.push(obj);
    }
    return department;
  };

  const durationHandler = () => {
    const durationStartYear = eduDurationStartInputRef.current[0].value;
    const durationStartMonth = eduDurationStartInputRef.current[1].value;
    const durationEndYear = eduDurationEndInputRef.current[0].value;
    const durationEndMonth = eduDurationEndInputRef.current[1].value;

    return {
      startYear: durationStartYear,
      startMonth: +durationStartMonth,
      endYear: durationEndYear,
      endMonth: +durationEndMonth,
    };
  };
  const [preferWorkList, setPreferWorkList] = useState([]);
  const inputTagsHandler = (inputTags)=>{
    setPreferWorkList(inputTags);
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
    const enteredGender = checkedLists.gender;
    const enteredCellphone = cellphoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    //個人資料
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredJobStatus = checkedLists.jobStatus;
    const enteredMilitary = checkedLists.military;
    const enteredHonoraryDischargeYear =
      honoraryDischargeYearInputRef.current.value;
    const enteredHonoraryDischargeMonth =
      honoraryDischargeMonthInputRef.current.value;
    const enteredDriveCert = checkedLists.driveCert;
    const enteredBio = bioInputRef.current.value;
    //學歷
    const enteredSchoolName = schoolNameInputRef.current.value;
    const enteredSchoolHightest = highestEduInputRef.current.checked;
    const department = departmentsHandler();
    const eduDuration = durationHandler();
    const eduStatus = checkedLists.status;
    //工作經歷
    const companyName = companyNameInputRef.current.value;
    const workArea = workAreaInputRef.current.value;
    const jobName = jobNameInputRef.current.value;
    //求職條件
    const onBoardAfterGetOffer = afterGetOfferInputRef.current.value;
    const preferArea = preferWorkList;
    const preferJobTitle = preferJobTitleInputRef.current.value;
    const preferJobContent = preferJobContentInputRef.current.value;
    //平台傳的指定頁面
    const returnUrl = returnUrlInputRef.current.value;

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
      department: department,
      duration: eduDuration,
      status: +eduStatus,
      companyName: companyName,
      workArea: workArea,
      jobName: jobName,
      onBoardAfterGetOffer: onBoardAfterGetOffer,
      preferArea : preferArea,
      preferJobTitle :preferJobTitle,
      preferJobContent :preferJobContent,
      returnUrl:returnUrl
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
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="gender">性別</label>
          </div>
          <div>
            <Radio
              name="gender"
              id="girl"
              value="0"
              label="女"
              onChange={checkedListHandler}
            />
            <Radio
              name="gender"
              id="boy"
              value="1"
              label="男"
              onChange={checkedListHandler}
            />
          </div>
        </section>
        {/* 手機 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="cellphone">手機</label>
            <input type="text" id="cellphone" ref={cellphoneInputRef} />
          </div>
        </section>
        {/* Email */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" ref={emailInputRef} />
          </div>
        </section>

        <h1>個人資料</h1>

        {/* 通訊地址 */}
        <section className={classes.section}>
          <div className={`${classes.control} + ${classes.col2}`}>
            <div>
              <label htmlFor="city">通訊地址-地區</label>
              <input type="number" id="city" ref={cityInputRef} />
            </div>
            <div>
              <label htmlFor="street">通訊地址-地址</label>
              <input type="text" id="street" ref={streetInputRef} />
            </div>
          </div>
        </section>
        {/* 就業狀態 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="jobStatus">就業狀態</label>
          </div>
          <Radio
            name="jobStatus"
            id="working"
            value="1"
            label="仍在職"
            onChange={checkedListHandler}
          />
          <Radio
            name="jobStatus"
            id="waiting"
            value="2"
            label="待業中"
            onChange={checkedListHandler}
          />
        </section>
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="military">兵役</label>
          </div>
          <Radio
            name="military"
            id="woman"
            value="0"
            label="未曾設定或女性"
            onChange={checkedListHandler}
          />
          <Radio
            name="military"
            id="ending"
            value="1"
            label="役畢"
            onChange={checkedListHandler}
          />
          <Radio
            name="military"
            id="retirement"
            value="2"
            label="屆退"
            onChange={checkedListHandler}
          />
          <Radio
            name="military"
            id="serving"
            value="3"
            label="未役"
            onChange={checkedListHandler}
          />
          <Radio
            name="military"
            id="standby"
            value="4"
            label="待役"
            onChange={checkedListHandler}
          />
          <Radio
            name="military"
            id="exempted"
            value="5"
            label="免役"
            onChange={checkedListHandler}
          />
        </section>
        {/* 退伍日期 */}
        <section className={classes.section}>
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
        </section>
        {/* 駕駛執照 */}
        <section className={classes.section}>
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
        </section>
        {/* 個人簡介 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="bio">個人簡介</label>
            <textarea type="text" id="bio" ref={bioInputRef} />
          </div>
        </section>

        <h1>學歷</h1>

        {/* 學校名稱 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="schoolName">學校名稱​</label>
            <input type="text" id="schoolName" ref={schoolNameInputRef} />
          </div>
        </section>
        {/* 最高學歷 */}
        <section className={classes.section}>
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
        </section>
        {/* 科系名稱、類別​ */}
        <section className={classes.section}>
          <div className={`${classes.control} + ${classes.col2}`}>
            <div>
              <label htmlFor="departmentsName">科系名稱​​</label>
              <input
                type="text"
                id="departmentsName"
                ref={(val) => (departmentsNameInputRef.current[0] = val)}
              />
            </div>
            <div>
              <label htmlFor="departmentsType">科系類別</label>
              <input
                type="number"
                id="departmentsType"
                ref={(val) => (departmentsTypeInputRef.current[0] = val)}
              />
            </div>
          </div>
          {departmentList}
          <div
            className={`${classes.control} + ${classes.alignRight}`}
            onClick={addDepartmentHandler}
          >
            + 新增科系
          </div>
        </section>
        {/* 就學日期 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="eduDurationEnd">就學日期</label>
          </div>
          <div className={`${classes.control} + ${classes.col5}`}>
            <div>
              <label htmlFor="eduDurationStartYear">年</label>
              <input
                type="number"
                id="eduDurationStartYear"
                ref={(val) => (eduDurationStartInputRef.current[0] = val)}
              />
            </div>
            <div>
              <label htmlFor="eduDurationStartMonth">月</label>
              <input
                type="number"
                id="eduDurationStartMonth"
                ref={(val) => (eduDurationStartInputRef.current[1] = val)}
              />
            </div>
            <p> ~ </p>
            <div>
              <label htmlFor="eduDurationEndYear">年</label>
              <input
                type="number"
                id="eduDurationEndYear"
                ref={(val) => (eduDurationEndInputRef.current[0] = val)}
              />
            </div>
            <div>
              <label htmlFor="eduDurationEndMonth">月</label>
              <input
                type="number"
                id="eduDurationEndMonth"
                ref={(val) => (eduDurationEndInputRef.current[1] = val)}
              />
            </div>
          </div>
        </section>
        {/* 學歷狀態 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="status">學歷狀態</label>
          </div>
          <div>
            <Radio
              name="status"
              id="graduated"
              value="1"
              label="畢業"
              onChange={checkedListHandler}
            />
            <Radio
              name="status"
              id="unfinished"
              value="2"
              label="肄業"
              onChange={checkedListHandler}
            />
            <Radio
              name="status"
              id="studying"
              value="3"
              label="就學中"
              onChange={checkedListHandler}
            />
          </div>
        </section>

        <h1>工作經歷</h1>

        {/* 公司名稱​ */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="companyName">公司名稱​​</label>
            <input type="text" id="companyName" ref={companyNameInputRef} />
          </div>
        </section>
        {/* 工作地點 類目代碼 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="workArea">工作地點</label>
            <input type="number" id="workArea" ref={workAreaInputRef} />
          </div>
        </section>
        {/* 職務名稱 */}
        <section className={classes.section}>
        <div className={classes.control}>
          <label htmlFor="jobName">職務名稱</label>
          <input type="text" id="jobName" ref={jobNameInputRef} />
        </div>
        </section>

        <h1>求職條件</h1>

        {/* 上班時段 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="jobTimePeriod">上班時段</label>
          </div>
          {allJobTimePeriod.map((jobTimePeriod, index) => (
            <Checkbox
              key={jobTimePeriod.name}
              type="jobTimePeriod"
              label={jobTimePeriod.name}
              index={index}
              value={jobTimePeriod.value}
              getCheckedList={checkedListHandler}
            />
          ))}
        </section>
        <section className={classes.section}>
          {/* 可上班日 */}
          <div className={classes.control}>
            <label htmlFor="onBoardDate">可上班日</label>
          </div>
          <div>
            <Radio
              name="onBoardDate"
              id="onBoarding"
              value="1"
              label="錄取後"
              onChange={checkedListHandler}
            />
            <Radio
              name="onBoardDate"
              id="changeOnBoardDate"
              value="-1"
              label="自訂日期"
              onChange={checkedListHandler}
            />
          </div>
        </section>
        {/* 錄取後可上班日 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="onBoardAfterGetOffer">錄取後可上班日</label>
            <select id="onBoardAfterGetOffer" ref={afterGetOfferInputRef}>
              <option value="1">隨時</option>
              <option value="2">1週</option>
              <option value="3">2週</option>
              <option value="4">一個月</option>
              <option value="5">二個月</option>
              <option value="6">三個月</option>
            </select>
          </div>
        </section>
        {/* 希望地點 類目代碼 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="preferArea">希望地點 類目代碼</label>
          </div>
          <InputTags inputTags={inputTagsHandler} />
        </section>
        {/* 希望職稱 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="preferJobTitle">希望職稱</label>
            <input
              type="text"
              required
              id="preferJobTitle"
              ref={preferJobTitleInputRef}
            />
          </div>
        </section>
        {/* 希望工作內容 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="preferJobContent">希望工作內容</label>
            <textarea type="text" id="preferJobContent" ref={preferJobContentInputRef} />
          </div>
        </section>
        {/* 平台傳的指定頁面 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="returnUrl">平台傳的指定頁面</label>
            <input
              type="text"
              required
              id="returnUrl"
              ref={returnUrlInputRef}
            />
          </div>
        </section>

        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
