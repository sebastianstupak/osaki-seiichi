import styles from "./sunken-city.module.css";

const SunkenCityContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.coverContainer}>
        <div className={styles.coverWrapper}>Album cover</div>
      </div>
      <div className={styles.creatureContainer}>
        <div className={styles.creatureWrapper}>Hidden naga</div>
      </div>
      <div className={styles.eerieTextContainer}>
        <span className={styles.eerieText}>
          strange noises coming from the city
          <br />~ they were so frightening, yet so intriguing
        </span>
      </div>
    </div>
  );
};

export default SunkenCityContent;
