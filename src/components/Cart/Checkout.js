import styles from "./Checkout.module.css";

import Input from "../UI/Input";

const Checkout = (props) => {
  const handleOrderSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles["delivery-form"]} onSubmit={handleOrderSubmit}>
      <Input
        className={`${styles.control} ${styles.left}`}
        label="First name"
        input={{ id: "first-name", type: "text" }}
      />
      <Input
        className={`${styles.control} ${styles.right}`}
        label="Last name"
        input={{ id: "last-name", type: "text" }}
      />
      <div className={styles.control}>
        <label htmlFor="address-1">Address line 1</label>
        <input type="text" id="address-1" />
      </div>
      <div className={styles.control}>
        <label htmlFor="address-2">Address line 2</label>
        <input type="text" id="address-2" />
      </div>
      <div className={`${styles.control} ${styles.left}`}>
        <label htmlFor="postal-code">Postal code</label>
        <input type="text" id="postal-code" />
      </div>
      <div className={`${styles.control} ${styles.right}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={`${styles.control} ${styles.left}`}>
        <label htmlFor="country">Country</label>
        <input type="text" id="country" />
      </div>
      <div className={`${styles.control} ${styles.right}`}>
        <label htmlFor="state">State</label>
        <input type="text" id="state" />
      </div>
      <div className={styles.control}>
        <label htmlFor="phone">Contact phone</label>
        <input type="text" id="phone" />
      </div>
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
