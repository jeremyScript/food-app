import { useEffect, useState } from "react";

import styles from "./Menu.module.css";
import Card from "./../UI/Card";
import FoodItem from "./FoodItem";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [didErrorOccur, setDidErrorOccur] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        "https://food-app-6dd5d-default-rtdb.firebaseio.com/menu"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setMenuData(data);
    } catch (error) {
      setDidErrorOccur(true);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  const foodList = menuData.map(({ id, name, description, price }) => (
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
