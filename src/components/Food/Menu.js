import styles from "./Menu.module.css";
import foodData from "../../assets/dummyData.js";

import Card from "./../UI/Card";
import FoodItem from "./FoodItem";

const Menu = () => {
  const foodList = foodData.map(({ id, name, description, price }) => (
    <FoodItem
      key={name}
      id={id}
      name={name}
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
