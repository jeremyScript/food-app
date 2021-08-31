import styles from "./FoodSummary.module.css";

const FoodSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite food from our broad selection and enjoy a delicious
        meal at home.
      </p>
      <p>
        All of our meals are cooked with high-quality ingredients by our
        experienced chefs!
      </p>
    </section>
  );
};

export default FoodSummary;
