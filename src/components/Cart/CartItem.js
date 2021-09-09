import { useContext } from "react";
import CartContext from "../../store/cart-context";

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, name, price, quantity } = props;

  const cartContext = useContext(CartContext);

  const handleIncrementItem = (event) => {
    const item = {
      id,
      name,
      price,
      quantity: 1,
    };
    cartContext.addItem(item);
  };

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h3 className={styles["item-name"]}>{name}</h3>
        <div className={styles["item-info"]}>
          <span className={styles["item-price"]}>${price.toFixed(2)}</span>
          <span className={styles["item-quantity"]}>x {quantity}</span>
        </div>
      </div>
      <div className={styles["item-controls"]}>
        <button>-</button>
        <button onClick={handleIncrementItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
