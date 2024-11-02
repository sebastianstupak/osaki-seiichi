import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <span>Header</span>
      </div>
    </header>
  );
};

export default Header;
