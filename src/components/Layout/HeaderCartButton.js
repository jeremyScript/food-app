import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const onCartButtonClick = (event) => {
    event.preventDefault();
    props.onShowCart();
  };

  return (
    <button className={styles.button} onClick={onCartButtonClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartContext.totalQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;
