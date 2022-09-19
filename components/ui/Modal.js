import classes from "./Modal.module.css";
import CSSTransition from "react-transition-group/CSSTransition";

const Modal = (props) => {
  const errorMessage = props.errorMessage?.toString()
  console.log(errorMessage)
  const animation = {
    enter: 400,
    exit: 1000,
  };
  return (
    <CSSTransition
      in={props.show}
      timeout={animation}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: classes.ModalOpen,
        exit: "",
        exitActive: classes.ModalClose,
      }}
    >
      <div className={classes.Modal + " "}>
        {props.errorMessage && <h3>{errorMessage}</h3>} 
        {!props.errorMessage && <h3>平台資料已成功送出</h3>}
        <button type="button" className={classes.Button} onClick={props.close}>
          關閉
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
