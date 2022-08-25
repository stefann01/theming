import React from "react";
import { Theme } from "../../model/Themes.enum";
import { useTheme } from "../../theme/ThemeProvider";
import styles from "./Header.module.scss";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${styles[theme]} ${styles.header}`}>
      {theme === Theme.Dark && (
        <button
          className={`${styles[theme]} ${styles.btn}`}
          onClick={() => setTheme(Theme.Light)}
        >
          Light
        </button>
      )}
      {theme === Theme.Light && (
        <button
          className={`${styles[theme]} ${styles.btn}`}
          onClick={() => setTheme(Theme.Dark)}
        >
          Dark
        </button>
      )}
    </div>
  );
}
