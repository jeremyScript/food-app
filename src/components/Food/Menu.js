import styles from "./Menu.module.css";
import foodData from "../../assets/dummyData.js";

const Menu = () => {
  const foodList = foodData.map((food) => (
    <li>
      <div>
        <span className={styles["food-title"]}>{food.title}</span>
        <span className={styles["food-description"]}>{food.description}</span>
        <span className={styles["food-price"]}>{food.price}</span>
      </div>
      <div>
        <div>
          <label>Amount</label>
          <input type="number" />
        </div>
        <button>+ Add</button>
      </div>
    </li>
  ));

  return (
    <section className={styles.menu}>
      <ul className={styles["menu-list"]}>{foodList}</ul>
    </section>
  );
};

export default Menu;
