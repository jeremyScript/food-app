import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const handleOrderSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles["delivery-form"]} onSubmit={handleOrderSubmit}>
      <div className={styles["input-group"]}>
        <div className={styles.control}>
          <label htmlFor="first-name">First name</label>
          <input type="text" id="first-name" />
        </div>
        <div className={styles.control}>
          <label htmlFor="last-name">Last name</label>
          <input type="text" id="last-name" />
        </div>
      </div>
      <div className={styles["input-group"]}>
        <div className={styles.control}>
          <label htmlFor="address-1">Address line 1</label>
          <input type="text" id="address-1" />
        </div>
      </div>
      <div className={styles["input-group"]}>
        <div className={styles.control}>
          <label htmlFor="address-2">Address line 2</label>
          <input type="text" id="address-2" />
        </div>
      </div>
      <div className={styles["input-group"]}>
        <div className={styles.control}>
          <label htmlFor="postal-code">Postal code</label>
          <input type="text" id="postal-code" />
        </div>
        <div className={styles.control}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </div>
      </div>
      <div className={styles["input-group"]}>
        <div className={styles.control}>
          <label htmlFor="country">Country</label>
          <input type="text" id="country" />
        </div>
        <div className={styles.control}>
          <label htmlFor="state">State</label>
          <input type="text" id="state" />
        </div>
      </div>
      <div className={styles["input-group"]}>
        <div className={styles.control}>
          <label htmlFor="phone">Contact phone</label>
          <input type="text" id="phone" />
        </div>
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
