import "./Settings.css";
import { useTheme } from "../../context/ThemeContext";

function Settings() {
  const { theme, changeTheme } = useTheme();

  const clearData = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all Life OS data?"
      )
    ) {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("lifeos_")) {
          localStorage.removeItem(key);
        }
      });

      window.location.reload();
    }
  };

  return (
    <div className="settings-page">
      <h1>⚙️ Settings</h1>

      <div className="settings-card">
        <h2>🎨 Choose Theme</h2>

        <p>
          Current Theme: <strong>{theme}</strong>
        </p>

        <div className="theme-options">
          <button
            className={
              theme === "dark"
                ? "theme-btn active"
                : "theme-btn"
            }
            onClick={() => changeTheme("dark")}
          >
            🌙 Dark
          </button>

          <button
            className={
              theme === "light"
                ? "theme-btn active"
                : "theme-btn"
            }
            onClick={() => changeTheme("light")}
          >
            ☀️ Light
          </button>

          <button
            className={
              theme === "blue"
                ? "theme-btn active"
                : "theme-btn"
            }
            onClick={() => changeTheme("blue")}
          >
            🌌 Blue
          </button>

          <button
            className={
              theme === "green"
                ? "theme-btn active"
                : "theme-btn"
            }
            onClick={() => changeTheme("green")}
          >
            🌿 Green
          </button>

          <button
            className={
              theme === "purple"
                ? "theme-btn active"
                : "theme-btn"
            }
            onClick={() => changeTheme("purple")}
          >
            💜 Purple
          </button>
        </div>

        <button
          className="danger-btn"
          onClick={clearData}
        >
          🗑 Clear Life OS Data
        </button>
      </div>

      <div className="about-card">
        <h2>ℹ️ About Life OS</h2>

        <p>
          <strong>Version 4.0</strong>
        </p>

        <p>
          Built with ❤️ using React,
          Context API,
          React Router and
          LocalStorage.
        </p>
      </div>
    </div>
  );
}

export default Settings;