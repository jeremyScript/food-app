import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalBody = (props) => {
  return <div className={styles["modal-body"]}>{props.children}</div>;
};

const Modal = (props) => {
  const overlayElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, overlayElement)}
      {ReactDOM.createPortal(
        <ModalBody>{props.children}</ModalBody>,
        overlayElement
      )}
    </>
  );
};

export default Modal;
