import styles from "./home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import BackgroundGradient from "../components/background-gradient";
import PromptScroll from "../components/prompt-scroll";
import LostBookContent from "../components/content/lost-book";
import SunkenCityContent from "../components/content/sunken-city";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <BackgroundGradient
          sections={[
            {
              color: "#cbd671",
              height: "120vh",
              children: <LostBookContent />,
            },
            {
              color: "#c2d1d6",
              height: "100vh",
              children: <SunkenCityContent />,
            },
          ]}
        ></BackgroundGradient>
      </main>
      <PromptScroll />
      <Footer />
    </div>
  );
};

export default Home;
