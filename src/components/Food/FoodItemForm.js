import { useRef, useState } from "react";

import styles from "./FoodItemForm.module.css";

import Input from "../UI/Input";

const FoodItemForm = (props) => {
  const [isInputValid, setIsInputValid] = useState(null);

  const quantityInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredQuantity = quantityInputRef.current.value;

    if (
      enteredQuantity.trim().length === 0 ||
      +enteredQuantity < 1 ||
      +enteredQuantity > 99
    ) {
      setIsInputValid(false);
      return;
    }

    setIsInputValid(true);
    props.onAddClick(enteredQuantity);
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
      {isInputValid === false && (
        <p className={styles["input-error"]}>Please enter a valid quantity</p>
      )}
      {isInputValid === true && (
        <p className={styles["input-success"]}>Added to the cart</p>
      )}
    </form>
  );
};

export default FoodItemForm;
