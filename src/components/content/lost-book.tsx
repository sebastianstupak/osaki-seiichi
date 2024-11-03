import Cover from "./cover";
import styles from "./lost-book.module.css";

const LostBookContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.coverContainer}>
        <div className={styles.coverWrapper}>
          <Cover
            srcSmall="media/lost-book-cover-300x300.png"
            src="media/lost-book-cover.png"
            alt="In the footsteps of a lost book hidden in the jungle temple"
          />
        </div>
      </div>
      <div className={styles.tigerContainer}>
        <div className={styles.tigerWrapper}>Hidden tiger</div>
      </div>
      <div className={styles.eerieTextContainer}>
        <span className={styles.eerieText}>
          text
          <br />~ text
        </span>
      </div>
    </div>
  );
};

export default LostBookContent;
