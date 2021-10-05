import styles from "./Checkout.module.css";

import { checkoutForm } from "../../utils/formConfig";
import Input from "../UI/Input";

const Checkout = (props) => {
  const handleOrderSubmit = (event) => {
    event.preventDefault();
  };

  const inputFields = Object.values(checkoutForm).map(({ props }) => (
    <Input
      key={props.label}
      className={`${styles.control} ${styles[props.className]}`}
      label={props.label}
      input={{
        id: props.input.id,
        type: props.input.type,
      }}
    />
  ));

  return (
    <form className={styles["delivery-form"]} onSubmit={handleOrderSubmit}>
      {inputFields}
      <div className={styles.actions}>
        <button
          className={styles["button--cancel"]}
          type="button"
          onClick={props.onHideCart}
        >
          Cancel
        </button>
        <button className={styles["button--submit"]} type="submit">
          Submit Order
        </button>
      </div>
    </form>
  );
};

export default Checkout;
