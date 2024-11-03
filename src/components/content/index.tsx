import styles from "./index.module.css";
import LostBookContent from "./lost-book";
import SunkenCityContent from "./sunken-city";

const Content: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSpacer} />
      <LostBookContent />
      <SunkenCityContent />
    </div>
  );
};

export default Content;
