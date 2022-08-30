import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        {/* 姓名 */}
        <div className={`${classes.control} + ${classes.col2}`}>
          <div>
            <label htmlFor="familyName">姓</label>
            <input type="text" required id="familyName" ref={titleInputRef} />
          </div>
          <div>
            <label htmlFor="firstName">名</label>
            <input type="text" required id="firstName" ref={titleInputRef} />
          </div>
        </div>
        {/* 身分證 */}
        <div className={classes.control}>
          <label htmlFor="identity">身分證</label>
          <input type="url" required id="identity" ref={imageInputRef} />
        </div>
        {/* 生日 */}
        <div className={classes.control}>
          <label htmlFor="birthday">生日</label>
        </div>
        <div className={`${classes.control} + ${classes.col3}`}>
          <div>
            <label htmlFor="birthYear">年</label>
            <input type="number" required id="birthYear" ref={titleInputRef} />
          </div>
          <div>
            <label htmlFor="birthMonth">月</label>
            <input type="number" required id="birthMonth" ref={titleInputRef} />
          </div>
          <div>
            <label htmlFor="birthDate">日</label>
            <input type="text" required id="birthDate" ref={titleInputRef} />
          </div>
        </div>
        {/* 性別 */}
        <div className={classes.control}>
          <label htmlFor="sex">性別</label>
        </div>
        <div>
          <div className={classes.col1}>
            <input
              name="sex"
              type="radio"
              required
              id="girl"
              ref={addressInputRef}
              value="0"
            />
            <label htmlFor="gril">女</label>
          </div>
          <div className={classes.col1}>
            <input
              name="sex"
              type="radio"
              required
              id="boy"
              ref={addressInputRef}
              value="1"
            />
            <label htmlFor="boy">男</label>
          </div>
        </div>
        {/* 手機 */}
        <div className={classes.control}>
          <label htmlFor="cellphone">手機</label>
          <input
            type="text"
            id="cellphone"
            required
            ref={descriptionInputRef}
          />
        </div>
        {/* Email */}
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" required ref={descriptionInputRef} />
        </div>
        {/* 通訊地址 */}
        <div className={classes.control}>
          <label htmlFor="city">通訊地址-地區</label>
          <input type="text" id="city" required ref={descriptionInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="street">通訊地址-地址</label>
          <input type="text" id="street" required ref={descriptionInputRef} />
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
              ref={addressInputRef}
              value="1"
            />
            <label htmlFor="working">仍在職</label>
          </div>
          <div className={classes.col1}>
            <input
              name="jobStatus"
              type="radio"
              id="waiting"
              ref={addressInputRef}
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
              required
              id="woman"
              ref={addressInputRef}
              value="0"
            />
            <label htmlFor="woman">未曾設定或女性</label>
          </div>
          <div className={classes.col1}>
            <input
              name="military"
              type="radio"
              required
              id="waiting"
              ref={addressInputRef}
              value="1"
            />
            <label htmlFor="waiting">役畢</label>
          </div>
          <div className={classes.col1}>
            <input
              name="military"
              type="radio"
              required
              id="retirement"
              ref={addressInputRef}
              value="2"
            />
            <label htmlFor="retirement">屆退</label>
          </div>
          <div className={classes.col1}>
            <input
              name="military"
              type="radio"
              required
              id="serving"
              ref={addressInputRef}
              value="3"
            />
            <label htmlFor="serving">未役</label>
          </div>
          <div className={classes.col1}>
            <input
              name="military"
              type="radio"
              required
              id="standby"
              ref={addressInputRef}
              value="4"
            />
            <label htmlFor="standby">待役</label>
          </div>
          <div className={classes.col1}>
            <input
              name="military"
              type="radio"
              required
              id="exempted"
              ref={addressInputRef}
              value="5"
            />
            <label htmlFor="exempted">免役</label>
          </div>
        </div>
        {/* 退伍日期 */}
        <div className={classes.control}>
          <label htmlFor="honoraryDischarge">退伍日期</label>
        </div>
        <div className={`${classes.control} + ${classes.col2}`}>
          <div>
            <label htmlFor="honoraryDischargeYear">年</label>
            <input
              type="number"
              required
              id="honoraryDischargeYear"
              ref={titleInputRef}
            />
          </div>
          <div>
            <label htmlFor="honoraryDischargeMonth">月</label>
            <input
              type="number"
              required
              id="honoraryDischargeMonth"
              ref={titleInputRef}
            />
          </div>
        </div>
        {/* 駕駛執照 */}
        <div className={classes.control}>
          <label htmlFor="driveCert">駕駛執照</label>
        </div>
        <div className={classes.col1}>
          <input
            name="driveCert"
            type="checkbox"
            id="lightMoto"
            ref={driveCertInputRef}
            value="1"
          />
          <label htmlFor="lightMoto">輕型機車駕照</label>
        </div>
        <div className={classes.col1}>
          <input
            name="driveCert"
            type="checkbox"
            id="normalMoto"
            ref={driveCertInputRef}
            value="2"
          />
          <label htmlFor="normalMoto">普通重型機車駕照</label>
        </div>
        <div className={classes.col1}>
          <input
            name="driveCert"
            type="checkbox"
            id="bigMoto"
            ref={driveCertInputRef}
            value="4"
          />
          <label htmlFor="bigMoto">大型重型機車駕照</label>
        </div>
        <div className={classes.col1}>
          <input
            name="driveCert"
            type="checkbox"
            id="normalCar"
            ref={driveCertInputRef}
            value="8"
          />
          <label htmlFor="normalCar">普通小型車駕照</label>
        </div>
        <div className={classes.col1}>
          <input
            name="driveCert"
            type="checkbox"
            id="normalTruck"
            ref={driveCertInputRef}
            value="16"
          />
          <label htmlFor="normalTruck">普通大貨車駕照</label>
        </div>
        <div className={classes.col1}>
          <input
            name="driveCert"
            type="checkbox"
            id="normalBus"
            ref={driveCertInputRef}
            value="32"
          />
          <label htmlFor="normalBus">普通大客車駕照</label>
        </div>
        <div className={classes.col1}>
          <input
            name="driveCert"
            type="checkbox"
            id="bigTruck"
            ref={driveCertInputRef}
            value="64"
          />
          <label htmlFor="bigTruck">普通聯結車駕照</label>
        </div>
        <div className={classes.col1}>
          <input
            name="driveCert"
            type="checkbox"
            id="proCar"
            ref={driveCertInputRef}
            value="128"
          />
          <label htmlFor="proCar">職業小型車駕照</label>
        </div>
        <div className={classes.col1}>
          <input
            name="driveCert"
            type="checkbox"
            id="proTruck"
            ref={driveCertInputRef}
            value="256"
          />
          <label htmlFor="proTruck">職業大貨車駕照</label>
        </div>
        <div className={classes.col1}>
          <input
            name="driveCert"
            type="checkbox"
            id="proBus"
            ref={driveCertInputRef}
            value="512"
          />
          <label htmlFor="proBus">職業大客車駕照</label>
        </div>
        <div className={classes.col1}>
          <input
            name="driveCert"
            type="checkbox"
            id="proBigTruck"
            ref={driveCertInputRef}
            value="1024"
          />
          <label htmlFor="proBigTruck">職業聯結車駕照</label>
        </div>
        {/* 個人簡介 */}
        <div className={classes.control}>
          <label htmlFor="bio">個人簡介</label>
          <textarea type="url" required id="bio" ref={imageInputRef} />
        </div>
        {/* 學校名稱 */}
        <div className={classes.control}>
          <label htmlFor="schoolName">學校名稱​</label>
          <input type="text" required id="schoolName" ref={titleInputRef} />
        </div>
        {/* 最高學歷 */}
        <div className={classes.control}>
          <label htmlFor="highestEdu">最高學歷</label>
          <select id="highestEdu" ref={titleInputRef}>
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
        {/* 科系名稱​ */}
        <div className={`${classes.control} + ${classes.col2}`}>
          <div>
            <label htmlFor="departmentsName">科系名稱​​</label>
            <input
              type="text"
              required
              id="departmentsName"
              ref={titleInputRef}
            />
          </div>
          {/* 科系類別​ */}
          <div>
            <label htmlFor="departmentsType">科系類別</label>
            <input
              type="text"
              required
              id="departmentsType"
              ref={titleInputRef}
            />
          </div>
        </div>
        {/* 就學日期 */}
        <div className={classes.control}>
          <label htmlFor="eduDurationEnd">就學日期</label>
        </div>
        <div className={`${classes.control} + ${classes.col5}`}>
          <div>
            <label htmlFor="eduDurationStartYear">年</label>
            <input
              type="number"
              required
              id="eduDurationStartYear"
              ref={titleInputRef}
            />
          </div>
          <div>
            <label htmlFor="eduDurationStartMonth">月</label>
            <input
              type="number"
              required
              id="eduDurationStartMonth"
              ref={titleInputRef}
            />
          </div>
          <p> ~ </p>
          <div>
            <label htmlFor="eduDurationEndYear">年</label>
            <input
              type="number"
              required
              id="eduDurationEndYear"
              ref={titleInputRef}
            />
          </div>
          <div>
            <label htmlFor="eduDurationEndMonth">月</label>
            <input
              type="number"
              required
              id="eduDurationEndMonth"
              ref={titleInputRef}
            />
          </div>
        </div>
        
        {/* 學歷狀態 */}
        <div className={classes.control}>
          <label htmlFor="status">學歷狀態</label>
        </div>
        <div>
          <div className={classes.col1}>
            <input
              name="status"
              type="radio"
              id="graduated"
              ref={addressInputRef}
              value="1"
            />
            <label htmlFor="graduated">畢業</label>
          </div>
          <div className={classes.col1}>
            <input
              name="status"
              type="radio"
              id="unfinished"
              ref={addressInputRef}
              value="2"
            />
            <label htmlFor="unfinished">肄業</label>
          </div>
          <div className={classes.col1}>
            <input
              name="status"
              type="radio"
              required
              id="studying"
              ref={addressInputRef}
              value="3"
            />
            <label htmlFor="studying">就學中</label>
          </div>
          </div>
        {/* 公司名稱​ */}
        <div className={classes.control}>
          <label htmlFor="companyName">公司名稱​​</label>
          <input type="text" required id="companyName" ref={titleInputRef} />
        </div>
        {/* 工作地點 類目代碼 */}
        <div className={classes.control}>
          <label htmlFor="workArea">工作地點</label>
          <input type="number" required id="companyName" ref={titleInputRef} />
        </div>
        {/* 任職期間 */}
        <div className={classes.control}>
          <label htmlFor="duration">任職期間</label>
        </div>
        <div className={`${classes.control} + ${classes.col5}`}>
          <div>
            <label htmlFor="duration">年</label>
            <input
              type="number"
              required
              id="durationStartYear"
              ref={titleInputRef}
            />
          </div>
          <div>
            <label htmlFor="durationStartMonth">月</label>
            <input
              type="number"
              required
              id="durationStartMonth"
              ref={titleInputRef}
            />
          </div>
          <p> ~ </p>
          <div>
            <label htmlFor="durationEndYear">年</label>
            <input
              type="number"
              required
              id="durationEndYear"
              ref={titleInputRef}
            />
          </div>
          <div>
            <label htmlFor="durationEndMonth">月</label>
            <input
              type="number"
              required
              id="durationEndMonth"
              ref={titleInputRef}
            />
          </div>
        </div>
        {/* 上班時段 */}
        <div className={classes.control}>
          <label htmlFor="jobTimePeriod">上班時段</label>
          <select id="jobTimePeriod" ref={titleInputRef}>
            <option value="1">日班</option>
            <option value="2">夜班</option>
            <option value="4">大夜班</option>
            <option value="8">假日班</option>
          </select>
        </div>
        {/* 可上班日 */}
        <div className={classes.control}>
          <label htmlFor="onBoardDate">可上班日</label>
        </div>
        <div>
          <div className={classes.col1}>
            <input
              name="onBoardDate"
              type="radio"
              required
              id="checked"
              ref={addressInputRef}
              value="1"
            />
            <label htmlFor="checked">錄取後</label>
          </div>
          <div className={classes.col1}>
            <input
              name="onBoardDate"
              type="radio"
              required
              id="date"
              ref={addressInputRef}
              value="-1"
            />
            <label htmlFor="date">自訂日期</label>
          </div>

          {/* 錄取後可上班日 */}
          <div className={classes.control}>
            <label htmlFor="onBoardAfterGetOffer">錄取後可上班日</label>
            <select id="onBoardAfterGetOffer" ref={titleInputRef}>
              <option value="1">隨時</option>
              <option value="2">1週</option>
              <option value="3">2週</option>
              <option value="4">一個月</option>
              <option value="5">二個月</option>
              <option value="6">三個月</option>
            </select>
          </div>

          {/* 最快可上班日期 */}
          <div className={classes.control}>
            <label htmlFor="customOnBoardDate">最快可上班日期</label>
          </div>
          <div className={`${classes.control} + ${classes.col3}`}>
            <div>
              <label htmlFor="customOnBoardYear">年</label>
              <input
                type="number"
                required
                id="customOnBoardYear"
                ref={titleInputRef}
              />
            </div>
            <div>
              <label htmlFor="customOnBoardMonth">月</label>
              <input
                type="number"
                required
                id="customOnBoardMonth"
                ref={titleInputRef}
              />
            </div>
            <div>
              <label htmlFor="customOnBoardDate">日</label>
              <input
                type="number"
                required
                id="customOnBoardDate"
                ref={titleInputRef}
              />
            </div>
          </div>
          {/* 希望地點 類目代碼 */}
          <div className={classes.control}>
            <label htmlFor="preferArea">希望地點</label>
            <input type="number" required id="preferArea" ref={titleInputRef} />
          </div>
          {/* 希望職稱 */}
          <div className={classes.control}>
            <label htmlFor="preferJobTitle">希望職稱</label>
            <input
              type="text"
              required
              id="preferJobTitle"
              ref={titleInputRef}
            />
          </div>
          {/* 希望工作內容 */}
          <div className={classes.control}>
            <label htmlFor="preferJobContent">希望工作內容</label>
            <input
              type="text"
              required
              id="preferJobContent"
              ref={titleInputRef}
            />
          </div>
          {/* 平台傳的指定頁面 */}
          <div className={classes.control}>
            <label htmlFor="returnUrl">平台傳的指定頁面</label>
            <input type="text" required id="returnUrl" ref={titleInputRef} />
          </div>
        </div>

        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
