import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onBackdropClick}></div>
  );
};

const ModalBody = (props) => {
  return <div className={styles["modal-body"]}>{props.children}</div>;
};

const Modal = (props) => {
  const overlayElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onBackdropClick={props.onBackdropClick} />,
        overlayElement
      )}
      {ReactDOM.createPortal(
        <ModalBody>{props.children}</ModalBody>,
        overlayElement
      )}
    </>
  );
};

export default Modal;
