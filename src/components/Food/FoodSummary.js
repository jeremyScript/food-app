import styles from "./FoodSummary.module.css";

const FoodSummary = () => {
  return (
    <div className={styles.summary}>
      <h2>
        Delicious Food
        <br />
        Delivered to Your Doorstep
      </h2>
      <p>
        Choose your favorite food from our broad selection and enjoy a delicious
        meal at home.
      </p>
    </div>
  );
};

export default FoodSummary;
