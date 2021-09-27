import styles from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form>
      <div className={styles.control}>
        <label htmlFor="first-name">First name</label>
        <input type="text" id="first-name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="address-1">Address line 1</label>
        <input type="text" id="address-1" />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal-code">Postal code</label>
        <input type="text" id="postal-code" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={styles.control}>
        <label htmlFor="country">Country</label>
        <input type="text" id="country" />
      </div>
      <div className={styles.control}>
        <label htmlFor="state">State</label>
        <input type="text" id="state" />
      </div>
      <div className={styles.control}>
        <label htmlFor="phone">Contact phone</label>
        <input type="text" id="phone" />
      </div>
    </form>
  );
};

export default Checkout;