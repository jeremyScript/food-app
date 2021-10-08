import styles from "./Select.module.css";

const Select = (props) => {
  const options = props.select.options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <div className={`${styles.select} ${props.className}`}>
      <label htmlFor={props.select.id}>{props.label}</label>
      <select {...props.select}>{options}</select>
      {props.isTouched && props.isValid === false && (
        <span className={styles.error}>{props.errorMessage}</span>
      )}
    </div>
  );
};

export default Select;
