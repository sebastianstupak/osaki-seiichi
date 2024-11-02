import styles from "./home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import BackgroundGradient from "../components/background-gradient";
import PromptScroll from "../components/prompt-scroll";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <BackgroundGradient>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </BackgroundGradient>
      </main>
      <PromptScroll />
      <Footer />
    </div>
  );
};

export default Home;
