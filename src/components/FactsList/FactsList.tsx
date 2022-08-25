import React from "react";
import styles from "./FactsList.module.scss";
import { useTheme } from "../../theme/ThemeProvider";

export default function CatFactCard() {
  const { theme } = useTheme();
  return (
    <div className={styles.factsContainer}>
      <div className={`${styles[theme]} ${styles.fact}`}>
        <h1 className={`${styles[theme]} ${styles.text}`}>
          Amazing cats fact.
        </h1>
        <p className={`${styles[theme]} ${styles.text}`}>
          A cat’s purr vibrates at a frequency of 25 to 150 hertz, which is the
          same frequency at which muscles and bones repair themselves.
        </p>
        <button className={`${styles[theme]} ${styles.btn}`}>Amazing!</button>
      </div>

      <div className={`${styles[theme]} ${styles.otherFacts}`}>
        <h1 className={`${styles[theme]} ${styles.text}`}>
          More facts about cats.
        </h1>
        <p className={`${styles[theme]} ${styles.text}`}>
          An ailurophile is a person who loves cats. The word ailuro is the
          ancient Greek word for cat.
        </p>
        <p className={`${styles[theme]} ${styles.text}`}>
          Cats sleep 12-16 hours per day, and spend 1/3 of their awake hours
          grooming
        </p>
        <p className={`${styles[theme]} ${styles.text}`}>
          Each cat’s nose is unique, much like human fingerprints.
        </p>
        <p className={`${styles[theme]} ${styles.text}`}>
          A house cat could beat superstar runner Usain Bolt in the 200 meter
          dash.
        </p>
      </div>
    </div>
  );
}
