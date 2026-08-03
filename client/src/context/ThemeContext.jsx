import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("lifeos_theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("lifeos_theme", theme);

    // Remove old theme classes
    document.body.classList.remove(
      "dark-theme",
      "light-theme",
      "blue-theme",
      "green-theme",
      "purple-theme"
    );

    // Add selected theme class
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}