import styles from "./Header.module.css";

import heroImage from "../../assets/hero-image.jpg";
import HeaderCartButton from "./HeaderCartButton";
import FoodSummary from "../Food/FoodSummary";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles["navbar"]}>
          <h1>FoodApp</h1>
          <div>
            <HeaderCartButton onCartOpen={props.onCartOpen} />
          </div>
        </nav>
        <div className={styles["hero-image"]}>
          <img src={heroImage} alt="A table full of food" />
        </div>
        <FoodSummary />
      </header>
    </>
  );
};

export default Header;
