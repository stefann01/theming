import React, { useEffect } from "react";
import "./App.css";
import CatFactCard from "./components/FactsList/FactsList";
import Header from "./components/Header/Header";
import { useTheme } from "./theme/ThemeProvider";
import styles from "./App.module.scss";

function App() {
  const { theme } = useTheme();
  useEffect(() => {
    while (document.body.classList.length) {
      document.body.classList.remove(document.body.classList[0]);
    }
    document.body.classList.add(theme);
    document.body.classList.add("body");
  }, [theme]);
  return (
    <div className={`${styles[theme]} ${styles.container}`}>
      <Header />
      <CatFactCard />
    </div>
  );
}

export default App;
