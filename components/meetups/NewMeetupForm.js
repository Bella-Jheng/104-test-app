import { useRef, useState } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import InputTags from "./TagInput";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";
import useHttp from "../hook/use-http";

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

//產生月份
const months = () => {
  const month = [];
  for (let i = 1; i < 13; i++) {
    month.push({ name: i + "月", value: i });
  }
  return month;
};
//產生日期
const dates = () => {
  const date = [];
  for (let i = 1; i < 32; i++) {
    date.push({ name: i + "日", value: i });
  }
  return date;
};

function NewMeetupForm() {
  const { isLoading, error, sendRequest } = useHttp();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
  const exptDurationStartInputRef = useRef([]);
  const exptDurationEndInputRef = useRef([]);
  //求職條件
  const afterGetOfferInputRef = useRef();
  const customOnBoardInputRef = useRef([]);
  const preferJobTitleInputRef = useRef();
  const preferJobContentInputRef = useRef();
  //平台傳的指定頁面
  const returnUrlInputRef = useRef();

  //處理checkbox
  const [checkedLists, setCheckLists] = useState();
  const checkedListHandler = (checkedList) => {
    setCheckLists(checkedList);
  };
  //處理radio
  const [radioLists, setRadioLists] = useState({});
  const radioListHandler = (radioList, type) => {
    setRadioLists((prevState) => ({
      ...prevState,
      [type]: radioList,
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
    return {
      edu: {
        startYear: eduDurationStartInputRef.current[0].value,
        startMonth: +eduDurationStartInputRef.current[1].value,
        endYear: eduDurationEndInputRef.current[0].value,
        endMonth: +eduDurationEndInputRef.current[1].value,
      },
      experience: {
        startYear: exptDurationStartInputRef.current[0].value,
        startMonth: +exptDurationStartInputRef.current[1].value,
        endYear: exptDurationEndInputRef.current[0].value,
        endMonth: +exptDurationEndInputRef.current[1].value,
      },
    };
  };
  const [preferWorkList, setPreferWorkList] = useState([]);
  const inputTagsHandler = (inputTags) => {
    setPreferWorkList(inputTags);
  };

  async function submitHandler(event) {
    //AC
    const activate = {
      familyName: familyNameInputRef.current.value,
      firstName: firstNameInputRef.current.value,
      identity: identityInputRef.current.value,
      birthYear: +birthYearInputRef.current.value,
      birthMonth: +birthMonthInputRef.current.value,
      birthDate: +birthDateInputRef.current.value,
      sex: +radioLists.gender,
      cellphone: cellphoneInputRef.current.value,
      email: emailInputRef.current.value,
    };
    //個人資料
    const info = {
      city: +cityInputRef.current.value,
      street: streetInputRef.current.value,
      jobStatus: +radioLists.jobStatus,
      military: +radioLists.military,
      honoraryDischargeYear: +honoraryDischargeYearInputRef.current.value,
      honoraryDischargeMonth: +honoraryDischargeMonthInputRef.current.value,
      driveCert: checkedLists?.driveCert,
      bio: bioInputRef.current.value,
    };
    //學歷
    const education = {
      name: schoolNameInputRef.current.value,
      highest: +highestEduInputRef.current.value,
      department: departmentsHandler(),
      duration: durationHandler().edu,
      status: +radioLists.status,
    };
    //工作經歷
    const experience = {
      companyName: companyNameInputRef.current.value,
      workArea: workAreaInputRef.current.value,
      jobName: jobNameInputRef.current.value,
      duration: durationHandler().experience,
    };
    //求職條件
    const jobCondition = {
      jobTimePeriod: checkedLists?.jobTimePeriod,
      onBoardDate: +radioLists.onBoardDate,
      onBoardAfterGetOffer: +afterGetOfferInputRef.current.value,
      customOnBoardDate: {
        year: customOnBoardInputRef.current[0].value,
        month: customOnBoardInputRef.current[1].value,
        date: customOnBoardInputRef.current[2].value,
      },
      preferArea: preferWorkList,
      preferJobTitle: preferJobTitleInputRef.current.value,
      preferJobContent: preferJobContentInputRef.current.value,
    };
    //平台傳的指定頁面
    const returnUrl = returnUrlInputRef.current.value;

    const meetupData = {
      activate,
      info,
      education,
      experience,
      jobCondition,
      returnUrl: returnUrl,
    };
    // openModal();

    // document.getElementById("formData").value = JSON.stringify(meetupData);

    //9/19 嘗試用 fetch 送資料，但有 CORS 問題，所以改用form表單送
    // return JSON.stringify(meetupData);

    const requestConfig = {
      url: "https://pda.104-dev.com.tw/activate/preparative",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: meetupData,
    };
    const response = await sendRequest(requestConfig);
    // console.log("request data : " +  JSON.stringify(meetupData));
    // console.log("API result message : " + JSON.stringify(response));
    console.log(response);
    const text = await response.text();
    const w = window.open();
    w.document.open();
    w.document.write(text);
    w.document.close();
  }

  // const submitForm = () => {
  //   document.getElementById("submitForm").submit();
  // };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>基本資料</h1>
        {/* 姓名 */}
        <section>
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
        </section>
        {/* 身分證 */}
        <section>
          <div className={classes.control}>
            <label htmlFor="identity">身分證</label>
            <input type="text" id="identity" ref={identityInputRef} />
          </div>
        </section>
        {/* 生日 */}
        <section>
          <div className={`${classes.control} + ${classes.col3}`}>
            <div>
              <label htmlFor="birthYear">生日年</label>
              <input type="number" id="birthYear" ref={birthYearInputRef} />
            </div>
            <div>
              <label htmlFor="birthMonth">生日月</label>
              <select id="birthMonth" ref={birthMonthInputRef}>
                {months().map((month) => (
                  <option key={month.value + "birthMonth"} value={month.value}>
                    {month.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="birthDate">生日日</label>
              {/* <input type="number" id="birthDate" ref={birthDateInputRef} /> */}
              <select id="birthDate" ref={birthDateInputRef}>
                {dates().map((date) => (
                  <option key={date.value + "birthDate"} value={date.value}>
                    {date.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
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
              onChange={radioListHandler}
            />
            <Radio
              name="gender"
              id="boy"
              value="1"
              label="男"
              onChange={radioListHandler}
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
              <label htmlFor="city">通訊地址-地區 類目代碼</label>
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
            onChange={radioListHandler}
          />
          <Radio
            name="jobStatus"
            id="waiting"
            value="2"
            label="待業中"
            onChange={radioListHandler}
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
            onChange={radioListHandler}
          />
          <Radio
            name="military"
            id="ending"
            value="1"
            label="役畢"
            onChange={radioListHandler}
          />
          <Radio
            name="military"
            id="retirement"
            value="2"
            label="屆退"
            onChange={radioListHandler}
          />
          <Radio
            name="military"
            id="serving"
            value="3"
            label="未役"
            onChange={radioListHandler}
          />
          <Radio
            name="military"
            id="standby"
            value="4"
            label="待役"
            onChange={radioListHandler}
          />
          <Radio
            name="military"
            id="exempted"
            value="5"
            label="免役"
            onChange={radioListHandler}
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
                {months().map((month) => (
                  <option
                    key={month.value + "honoraryDischarge"}
                    value={month.value}
                  >
                    {month.name}
                  </option>
                ))}
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
              id={"driveCert" + index}
              name="driveCert"
              value={driveCert.value}
              label={driveCert.name}
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
              <label htmlFor="departmentsType">科系 類目代碼</label>
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
              <select
                type="number"
                id="eduDurationStartMonth"
                ref={(val) => (eduDurationStartInputRef.current[1] = val)}
              >
                {months().map((month) => (
                  <option
                    key={month.value + "eduDurationStart"}
                    value={month.value}
                  >
                    {month.name}
                  </option>
                ))}
              </select>
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
              <select
                type="number"
                id="eduDurationEndMonth"
                ref={(val) => (eduDurationEndInputRef.current[1] = val)}
              >
                {months().map((month) => (
                  <option
                    key={month.value + "eduDurationEndMonth"}
                    value={month.value}
                  >
                    {month.name}
                  </option>
                ))}
              </select>
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
              onChange={radioListHandler}
            />
            <Radio
              name="status"
              id="unfinished"
              value="2"
              label="肄業"
              onChange={radioListHandler}
            />
            <Radio
              name="status"
              id="studying"
              value="3"
              label="就學中"
              onChange={radioListHandler}
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
            <label htmlFor="workArea">工作地點 類目代碼</label>
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
        {/* 任職期間 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="exptDuration">任職期間</label>
          </div>
          <div className={`${classes.control} + ${classes.col5}`}>
            <div>
              <label htmlFor="exptDurationStartYear">年</label>
              <input
                type="number"
                id="exptDurationStartYear"
                ref={(val) => (exptDurationStartInputRef.current[0] = val)}
              />
            </div>
            <div>
              <label htmlFor="exptDurationStartMonth">月</label>
              <select
                type="number"
                id="exptDurationStartMonth"
                ref={(val) => (exptDurationStartInputRef.current[1] = val)}
              >
                {months().map((month) => (
                  <option
                    key={month.value + "exptDurationStartMonth"}
                    value={month.value}
                  >
                    {month.name}
                  </option>
                ))}
              </select>
            </div>
            <p> ~ </p>
            <div>
              <label htmlFor="exptDurationEndYear">年</label>
              <input
                type="number"
                id="exptDurationEndYear"
                ref={(val) => (exptDurationEndInputRef.current[0] = val)}
              />
            </div>
            <div>
              <label htmlFor="exptDurationEndMonth">月</label>
              <select
                type="number"
                id="exptDurationnEndMonth"
                ref={(val) => (exptDurationEndInputRef.current[1] = val)}
              >
                {months().map((month) => (
                  <option
                    key={month.value + "exptDurationEndMonth"}
                    value={month.value}
                  >
                    {month.name}
                  </option>
                ))}
              </select>
            </div>
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
              id={"jobTimePeriod" + index}
              name="jobTimePeriod"
              value={jobTimePeriod.value}
              label={jobTimePeriod.name}
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
              onChange={radioListHandler}
            />
            <Radio
              name="onBoardDate"
              id="changeOnBoardDate"
              value="-1"
              label="自訂日期"
              onChange={radioListHandler}
            />
          </div>
        </section>
        {/* 錄取後可上班日 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="onBoardAfterGetOffer">錄取後可上班日</label>
            <select id="onBoardAfterGetOffer" ref={afterGetOfferInputRef}>
              <option value="0">隨時</option>
              <option value="1">1週</option>
              <option value="2">2週</option>
              <option value="3">3週</option>
              <option value="4">一個月</option>
              <option value="5">二個月</option>
              <option value="6">三個月</option>
            </select>
          </div>
        </section>
        {/* 最快可上班日期 */}
        <section>
          <div className={`${classes.control} + ${classes.col3}`}>
            <div>
              <label htmlFor="customOnBoardYear">最快可上班年</label>
              <input
                type="number"
                id="customOnBoardYear"
                ref={(val) => (customOnBoardInputRef.current[0] = val)}
              />
            </div>
            <div>
              <label htmlFor="customOnBoardMonth">月</label>
              <select
                id="customOnBoardMonth"
                ref={(val) => (customOnBoardInputRef.current[1] = val)}
              >
                {months().map((month) => (
                  <option
                    key={month.value + "customOnBoardMonth"}
                    value={month.value}
                  >
                    {month.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="customOnBoardDate">日</label>
              <select
                id="customOnBoardDate"
                ref={(val) => (customOnBoardInputRef.current[2] = val)}
              >
                {dates().map((date) => (
                  <option
                    key={date.value + "customOnBoardDate"}
                    value={date.value}
                  >
                    {date.name}
                  </option>
                ))}
              </select>
            </div>
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
              id="preferJobTitle"
              ref={preferJobTitleInputRef}
            />
          </div>
        </section>
        {/* 希望工作內容 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="preferJobContent">希望工作內容</label>
            <textarea
              type="text"
              id="preferJobContent"
              ref={preferJobContentInputRef}
            />
          </div>
        </section>
        {/* 平台傳的指定頁面 */}
        <section className={classes.section}>
          <div className={classes.control}>
            <label htmlFor="returnUrl">平台傳的指定頁面</label>
            <input type="text" id="returnUrl" ref={returnUrlInputRef} />
          </div>
        </section>

        <Modal show={modalIsOpen} close={closeModal} errorMessage={error} />
        {modalIsOpen && <Backdrop show={modalIsOpen} close={closeModal} />}

        <div className={classes.actions}>
          {isLoading && <p> is Loading...</p>}
          <button type="button" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </form>
      {/* <form
        className={classes.form}
        action="https://pda.104-dev.com.tw/activate/preparative"
        target="_blank"
        method="post"
        id="submitForm"
      >
        <section className={classes.section}>
          <div className={classes.control}>
          <label htmlFor="">送出資料</label>
            <textarea type="text" value="" id="formData" />
          </div>
          <div className={classes.actions}>
            {isLoading && <p> is Loading...</p>}
            <button type="button" onClick={submitForm}>
              {" "}
              Submit
            </button>
          </div>
        </section>
      </form> */}
      <form
        id="form"
        action="https://pda.104-dev.com.tw/activate/preparative"
        method="post"
        tagart="_blank"
      >
familyName<input name="activate[familyName]" value="陳"></input><br/>
    firstName<input name="activate[firstName]" value="tester"></input><br/>
    cellphone<input name="activate[cellphone]" value="0912345678"></input><br/>
    identity<input name="activate[identity]" value="A141400874"></input><br/>
    identityType<input name="activate[identityType]" value="0"></input><br/>
    birthYear<input name="activate[birthYear]" value="2000"></input><br/>
    birthMonth<input name="activate[birthMonth]" value="12"></input><br/>
    birthDate<input name="activate[birthDate]" value="1"></input><br/>
    sex<input name="activate[sex]" value="1"></input><br/>
    email<input name="activate[email]" value="ting123@104.com.tw"></input><br/>
    <hr/>
    city<input name="info[city]" value="6001001001"></input><br/>
    street<input name="info[street]" value="寶中路1巷1弄1號"></input><br/>
    jobStatus<input name="info[jobStatus]" value="1"></input><br/>
    military<input name="info[military]" value="1"></input><br/>
    honoraryDischargeYear<input name="info[honoraryDischargeYear]" value="2011"></input><br/>
    honoraryDischargeMonth<input name="info[honoraryDischargeMonth]" value="1"></input><br/>
    driveCert[0]<input name="info[driveCert][0]" value="1"></input><br/>
    driveCert[1]<input name="info[driveCert][1]" value="4"></input><br/>
    bio<input name="info[bio]" value="大家好！！！"></input><br/>
    <hr/>
    name<input name="education[name]" value="一零四大學"></input><br/>
    highest<input name="education[highest]" value="1"></input><br/>
    departments[0] name<input name="education[departments][0][name]" value="化工1"></input><br/>
    departments[0] type[0]<input name="education[departments][0][type][0]" value="3016002000"></input><br/>
    departments[1] name<input name="education[departments][0][name]" value="工化2"></input><br/>
    departments[1] type[0]<input name="education[departments][0][type][0]" value="3001002000"></input><br/>
    duration startYear<input name="education[duration][startYear]" value="2001"></input><br/>
    duration startMonth<input name="education[duration][startMonth]" value="12"></input><br/>
    duration endYear<input name="education[duration][endYear]" value="2003"></input><br/>
    duration endMonth<input name="education[duration][endMonth]" value="1"></input><br/>
    status<input name="education[status]" value="1"></input><br/>
    <hr/>
    companyName<input name="experience[companyName]" value="104公司"></input><br/>
    workArea<input name="experience[workArea]" value="6001018001"></input><br/>
    jobName<input name="experience[jobName]" value="104職務"></input><br/>
    duration startYear<input name="experience[duration][startYear]" value="2009"></input><br/>
    duration startMonth<input name="experience[duration][startMonth]" value="2"></input><br/>
    duration endYear<input name="experience[duration][endYear]" value="2010"></input><br/>
    duration endMonth<input name="experience[duration][endMonth]" value="2"></input><br/>
    <hr/>
    jobTimePeriod[0]<input name="jobCondition[jobTimePeriod][0]" value="1"></input><br/>
    jobTimePeriod[1]<input name="jobCondition[jobTimePeriod][1]" value="2"></input><br/>
    onBoardDate<input name="jobCondition[onBoardDate]" value="1"></input><br/>
    onBoardAfterGetOffer<input name="jobCondition[onBoardAfterGetOffer]" value="0"></input><br/>
    preferArea[0]<input name="jobCondition[preferArea][0]" value="6001001000"></input><br/>
    preferArea[1]<input name="jobCondition[preferArea][1]" value="6001002000"></input><br/>
    customOnBoardDate year<input name="jobCondition[customOnBoardDate][year]" value=""></input><br/>
    duration month<input name="jobCondition[customOnBoardDate][month]" value=""></input><br/>
    duration date<input name="jobCondition[customOnBoardDate][date]" value=""></input><br/>
    preferJobTitle<input name="jobCondition[preferJobTitle]" value="希望職類內容"></input><br/>
    preferJobContent<input name="jobCondition[preferJobContent]" value="工作描述"></input><br/>
    <input type="submit" value="Submit"></input>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
