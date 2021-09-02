import styles from "./FoodItem.module.css";
import FoodItemForm from "./FoodItemForm";

const FoodItem = (props) => {
  const { name, description, price } = props;

  return (
    <li className={styles["food"]}>
      <div className={styles["food__info"]}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
      <div className={styles["food__controls"]}>
        <FoodItemForm />
      </div>
    </li>
  );
};

export default FoodItem;
