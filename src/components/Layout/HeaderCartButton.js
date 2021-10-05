import { useContext, useEffect, useState, useRef } from "react";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cartContext";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const onCartButtonClick = (event) => {
    event.preventDefault();
    props.onShowCart();
  };

  const [shouldBump, setShouldBump] = useState(false);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setShouldBump(true);
    const bumpTimer = setTimeout(() => setShouldBump(false), 150);
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
