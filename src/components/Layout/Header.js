import styles from "./Header.module.css";

import heroImage from "../../assets/hero-image.jpg";
import HeaderCartButton from "./HeaderCartButton";
import FoodSummary from "../Food/FoodSummary";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>FoodApp</h1>
        <div>
          <HeaderCartButton />
        </div>
      </header>
      <div className={styles["hero-image"]}>
        <img src={heroImage} alt="A table full of food" />
      </div>
      <FoodSummary />
    </>
  );
};

export default Header;
