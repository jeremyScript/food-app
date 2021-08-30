import styles from "./Header.module.css";

import heroImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>FoodApp</h1>
        <button>Cart</button>
      </header>
      <div className={styles["hero-image"]}>
        <img src={heroImage} alt="A table full of food" />
      </div>
    </>
  );
};

export default Header;
