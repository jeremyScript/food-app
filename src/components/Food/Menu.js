import styles from "./Menu.module.css";
import foodData from "../../assets/dummyData.js";

import Card from "./../UI/Card";
import FoodItem from "./FoodItem";

const Menu = () => {
  const foodList = foodData.map(({ title, description, price }) => (
    <FoodItem
      key={title + price}
      title={title}
      description={description}
      price={price}
    />
  ));

  return (
    <main className={styles.menu}>
      <Card>
        <ul className={styles["menu-list"]}>{foodList}</ul>
      </Card>
    </main>
  );
};

export default Menu;
