import "./Settings.css";
import { useTheme } from "../../context/ThemeContext";

function Settings() {
  const {
    darkMode,
    toggleTheme,
  } = useTheme();

  const clearData = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all Life OS data?"
      )
    ) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="settings-page">

      <h1>⚙️ Settings</h1>

      <div className="settings-card">

        <div className="setting-item">
          <span>
            {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </span>

          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleTheme}
          />
        </div>

        <button
          className="danger-btn"
          onClick={clearData}
        >
          🗑 Clear All Local Data
        </button>

      </div>

      <div className="about-card">

        <h2>ℹ️ About Life OS</h2>

        <p>Version 1.1</p>

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