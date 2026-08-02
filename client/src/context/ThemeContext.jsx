import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("lifeos_theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem(
      "lifeos_theme",
      darkMode ? "dark" : "light"
    );

    document.body.className = darkMode
      ? "dark-theme"
      : "light-theme";
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}