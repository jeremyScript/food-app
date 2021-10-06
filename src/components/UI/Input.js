import React from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={`${styles.input} ${props.className}`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {props.isTouched && props.isValid === false && (
        <span className={styles.error}>{props.errorMessage}</span>
      )}
    </div>
  );
});

export default Input;
