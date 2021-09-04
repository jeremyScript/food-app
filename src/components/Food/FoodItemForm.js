import { useRef } from "react";

import styles from "./FoodItemForm.module.css";

import Input from "../UI/Input";

const FoodItemForm = (props) => {
  const quantityInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        ref={quantityInputRef}
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "99",
          step: "1",
          defaultValue: "1",
        }}
        label="Qty:"
      />
      <button>+ Add</button>
    </form>
  );
};

export default FoodItemForm;
