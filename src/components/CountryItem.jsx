import styles from "./CountryItem.module.css";

function CountryItem({ city, emoji }) {
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{city.country}</span>
    </li>
  );
}

export default CountryItem;
