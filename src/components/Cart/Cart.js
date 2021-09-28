import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const cartContext = useContext(CartContext);

  const hasItems = cartContext.items.length > 0;

  const handleCloseCartClick = (event) => {
    event.preventDefault();
    props.onHideCart();
  };

  const handleOrderClick = (event) => {
    event.preventDefault();
    setShowCheckout(true);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </ul>
  );

  const cartActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={handleCloseCartClick}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={handleOrderClick}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onBackdropClick={handleCloseCartClick}>
      <div className={styles.cart}>
        {hasItems ? (
          cartItems
        ) : (
          <p className={styles.empty}>Your cart is empty</p>
        )}
        <div className={styles.bottom}>
          <div className={styles.total}>
            <span>Total Amount: </span>
            <span>${Math.abs(cartContext.totalAmount.toFixed(2))}</span>
          </div>
          {showCheckout && <Checkout onHideCart={handleCloseCartClick} />}
          {!showCheckout && cartActions}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
