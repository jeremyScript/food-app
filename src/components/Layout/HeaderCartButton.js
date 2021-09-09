import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const [shouldBump, setShouldBump] = useState(false);

  const onCartButtonClick = (event) => {
    event.preventDefault();
    props.onShowCart();
  };

  useEffect(() => {
    setShouldBump(true);
    const bumpTimer = setTimeout(() => setShouldBump(false), 100);
    return () => clearTimeout(bumpTimer);
  }, [cartContext.items]);

  const btnClasses = shouldBump
    ? `${styles.badge} ${styles.bump}`
    : `${styles.badge}`;

  return (
    <button className={styles.button} onClick={onCartButtonClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={btnClasses}>{cartContext.totalQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;
