import styles from "./FoodItemForm.module.css";

import Input from "../UI/Input";

const FoodItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        input={{
          id: "quantity",
          type: "number",
          min: 1,
          max: 99,
          step: 1,
          defaultValue: 1,
        }}
        label="Qty:"
      />
      <button>+ Add</button>
    </form>
  );
};

export default FoodItemForm;
