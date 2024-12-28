import Cover from "./cover";
import styles from "./new-album.module.css";

const NewAlbumContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.coverContainer}>
        <div className={styles.coverWrapper}>
          <Cover
            srcSmall="media/new-album-cover-blurred.png"
            src="media/new-album-cover-blurred.png"
            alt="Coming soon"
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.text}>coming soon</span>
      </div>
    </div>
  );
};

export default NewAlbumContent;
