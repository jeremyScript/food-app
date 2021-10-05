import { useContext } from "react";
import CartContext from "../../store/cartContext";

import styles from "./FoodItem.module.css";
import FoodItemForm from "./FoodItemForm";

const FoodItem = (props) => {
  const { id, name, description, price } = props;

  const cartContext = useContext(CartContext);

  const handleAddClick = (quantity) => {
    cartContext.addItem({
      id,
      name,
      price,
      quantity,
    });
  };

  return (
    <li className={styles["food"]}>
      <div className={styles["food__info"]}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
      <div className={styles["food__controls"]}>
        <FoodItemForm id={props.id} onAddClick={handleAddClick} />
      </div>
    </li>
  );
};

export default FoodItem;
