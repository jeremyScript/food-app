import { useContext } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const hasItems = cartContext.items.length > 0;

  const handleCloseCartClick = (event) => {
    event.preventDefault();
    props.onHideCart();
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </ul>
  );

  return (
    <Modal onBackdropClick={handleCloseCartClick}>
      <div className={styles.cart}>
        {cartItems}
        <div className={styles.bottom}>
          <div className={styles.total}>
            <span>Total Amount: </span>
            <span>${cartContext.totalAmount.toFixed(2)}</span>
          </div>
          <div className={styles.actions}>
            <button
              className={styles["button--alt"]}
              onClick={handleCloseCartClick}
            >
              Close
            </button>
            {hasItems && <button className={styles.button}>Order</button>}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
