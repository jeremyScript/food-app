import styles from "./Checkout.module.css";

import { checkoutForm } from "../../utils/formConfig";
import useForm from "../../hooks/useForm";

const Checkout = (props) => {
  const [renderFormInputs, isFormValid, deliveryData] = useForm(checkoutForm);

  const handleOrderSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) return;
    console.log("deliveryData", deliveryData);
    // props.onSubmitOrder(deliveryData);
    // console.log("submitted");
  };

  return (
    <form className={styles["delivery-form"]} onSubmit={handleOrderSubmit}>
      {renderFormInputs(styles.control)}
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
