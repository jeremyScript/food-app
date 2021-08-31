import styles from "./FoodItem.module.css";

const FoodItem = (props) => {
  const { title, description, price } = props;

  return (
    <li className={styles["food"]}>
      <div className={styles["food__info"]}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
        <span className={styles.price}>${price.toFixed(2)}</span>
      </div>
      <div className={styles["food__controls"]}>
        <div>
          <label>Amount</label>
          <input type="number" />
        </div>
        <button>+ Add</button>
      </div>
    </li>
  );
};

export default FoodItem;
