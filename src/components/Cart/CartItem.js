import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const { name, price, quantity } = props;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h3 className={styles["item-name"]}>{name}</h3>
        <div className={styles["item-info"]}>
          <span className={styles["item-price"]}>${price}</span>
          <span className={styles["item-quantity"]}>x {quantity}</span>
        </div>
      </div>
      <div className={styles["item-controls"]}>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;
