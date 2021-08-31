import styles from "./FoodItem.module.css";

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
