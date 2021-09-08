import { useRef, useState, useEffect } from "react";

import styles from "./FoodItemForm.module.css";

import Input from "../UI/Input";

const FoodItemForm = (props) => {
  const quantityInputRef = useRef();

  const [isInputValid, setIsInputValid] = useState(null);

  useEffect(() => {
    const messageTimer = setTimeout(() => setIsInputValid(null), 3000);
    return () => clearTimeout(messageTimer);
  }, [isInputValid]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredQuantity = quantityInputRef.current.value;
    const derivedQuantity = +enteredQuantity;

    if (
      enteredQuantity.trim().length === 0 ||
      derivedQuantity < 1 ||
      derivedQuantity > 99
    ) {
      setIsInputValid(false);
      return;
    }

    setIsInputValid(true);
    props.onAddClick(derivedQuantity);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <Input
        ref={quantityInputRef}
        label="Qty:"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {isInputValid === false && (
        <p className={styles["input-error"]}>Please enter a valid quantity.</p>
      )}
      {isInputValid === true && (
        <p className={styles["input-success"]}>Added to the cart.</p>
      )}
    </form>
  );
};

export default FoodItemForm;
