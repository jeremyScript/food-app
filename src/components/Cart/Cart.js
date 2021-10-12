import { useContext, useState } from "react";
import CartContext from "../../store/cartContext";

import Modal from "../UI/Modal";
import Card from "../UI/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isOrderSubmitting, setIsOrderSubmitting] = useState(false);
  const [didOrderSubmit, setDidOrderSubmit] = useState(false);
  const [httpError, setHttpError] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const cartContext = useContext(CartContext);

  const hasItems = cartContext.items.length > 0;

  const handleCloseCartClick = (event) => {
    props.onHideCart();
  };

  const handleCheckoutClick = (event) => {
    setShowCheckout(true);
  };

  const handleOrderSubmit = async (deliveryData) => {
    setHttpError(false);
    setIsOrderSubmitting(true);

    const deliveryInfo = { ...deliveryData };

    try {
      const response = await fetch(
        "https://food-app-6dd5d-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: deliveryInfo,
            orderedItems: cartContext.items,
          }),
        }
      );

      if (response.ok) {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      console.log("error", error);
      setHttpError(true);
    }

    setIsOrderSubmitting(false);
    setDidOrderSubmit(true);
  };

  if (!httpError && didOrderSubmit) {
    cartContext.clearCart();
  }

  const cartItems = (
    <ul className={styles["cart-top"]}>
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
      <button
        className={styles["button--close"]}
        onClick={handleCloseCartClick}
      >
        Close
      </button>
      {hasItems && (
        <button
          className={styles["button--order"]}
          onClick={handleCheckoutClick}
        >
          Checkout
        </button>
      )}
    </div>
  );

  const modalContent = (
    <div className={styles.cart}>
      {hasItems ? (
        cartItems
      ) : (
        <p className={styles["cart-empty"]}>Your cart is empty</p>
      )}
      <div className={styles["cart-bottom"]}>
        <div className={styles.total}>
          <span>Total Amount: </span>
          <span>${Math.abs(cartContext.totalAmount.toFixed(2))}</span>
        </div>
        {showCheckout && (
          <Checkout
            didOrderSubmit={didOrderSubmit}
            onHideCart={handleCloseCartClick}
            onSubmitOrder={handleOrderSubmit}
          />
        )}
        {!showCheckout && cartActions}
      </div>
    </div>
  );

  const modalContentIsSubmitting = <Card>Sending order data...</Card>;

  const modalContentDidSubmit = (
    <Card>
      <p>Order sent successfully!</p>
      <div className={styles.actions}>
        <button
          className={styles["button--close"]}
          onClick={handleCloseCartClick}
        >
          Close
        </button>
      </div>
    </Card>
  );

  const modalContentHttpError = (
    <Card>
      <p>Something went wrong! Please try again later.</p>
      <div className={styles.actions}>
        <button
          className={styles["button--close"]}
          onClick={handleCloseCartClick}
        >
          Close
        </button>
      </div>
    </Card>
  );

  return (
    <Modal onBackdropClick={handleCloseCartClick}>
      {isOrderSubmitting && modalContentIsSubmitting}
      {!isOrderSubmitting && !didOrderSubmit && modalContent}
      {didOrderSubmit && !httpError && modalContentDidSubmit}
      {didOrderSubmit && httpError && modalContentHttpError}
    </Modal>
  );
};

export default Cart;
