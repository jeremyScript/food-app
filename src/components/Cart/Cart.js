import Card from "../UI/Card";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", quantity: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>
          <div>
            <span className={styles["item-name"]}>{item.name}</span>
            <div className={styles["item-info"]}>
              <span className={styles["item-price"]}>${item.price}</span>
              <span className={styles["item-quantity"]}>x {item.quantity}</span>
            </div>
          </div>
          <div>
            <button>-</button>
            <button>+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      <Card className={styles.cart}>
        {cartItems}
        <div>
          <span>Total Amount: </span>
          <span>$25.99</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]}>Close</button>
          <button className={styles.button}>Order</button>
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;
