import type { NextPage } from "next";
import * as styles from "../styles/test.css";

const Home: NextPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.h1}>my h1</h1>
      <h2 className={styles.h2}>my h2</h2>
      <p className={styles.p}>my paragraph</p>
      <label className={styles.label}>my label</label>
      <p className={styles.boldText}>my bold text</p>
    </div>
  );
};

export default Home;
