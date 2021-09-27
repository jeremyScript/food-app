import { useEffect, useState } from "react";

import styles from "./Menu.module.css";
import Card from "./../UI/Card";
import FoodItem from "./FoodItem";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMenuData = async () => {
    setIsLoading(true);
    setHttpError(null);

    try {
      const response = await fetch(
        "https://food-app-6dd5d-default-rtdb.firebaseio.com/menu.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedData = Object.keys(data).map((id) => ({
        id,
        name: data[id].name,
        description: data[id].description,
        price: data[id].price,
      }));

      setMenuData(transformedData);
      setIsLoading(false);
    } catch (httpError) {
      setHttpError(httpError);
      setIsLoading(false);
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

  const isThereData = foodList.length > 0;

  return (
    <main className={styles.menu}>
      <Card>
        <ul className={styles["menu-list"]}>
          {isLoading && <li className={styles.message}>Loading...</li>}
          {httpError && (
            <li className={styles.message}>Something went wrong...</li>
          )}
          {!httpError && foodList}
          {!httpError && !isLoading && !isThereData && (
            <li className={styles.message}>No item found...</li>
          )}
        </ul>
      </Card>
    </main>
  );
};

export default Menu;
