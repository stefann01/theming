import React, { useState } from "react";
import { Theme } from "../model/Themes.enum";
interface ThemeProviderProps {
  themeName: Theme;
  children: React.ReactNode;
}

interface ThemeContextModel {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = React.createContext<ThemeContextModel>(
  {} as ThemeContextModel
);

export function ThemeProvider({ themeName, children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(themeName);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("How cannot use theme without a theme provider");
  }
  return context;
}
