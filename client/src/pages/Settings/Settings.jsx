import { useState } from "react";
import "./Settings.css";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [stepGoal, setStepGoal] = useState(10000);
  const [taskGoal, setTaskGoal] = useState(5);

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
          <span>🔔 Notifications</span>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() =>
              setNotifications(!notifications)
            }
          />
        </div>

        <div className="setting-item">
          <span>👣 Daily Step Goal</span>

          <input
            type="number"
            value={stepGoal}
            onChange={(e) =>
              setStepGoal(e.target.value)
            }
          />
        </div>

        <div className="setting-item">
          <span>🎯 Daily Task Goal</span>

          <input
            type="number"
            value={taskGoal}
            onChange={(e) =>
              setTaskGoal(e.target.value)
            }
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

        <p>Version 3.1 Premium</p>

        <p>
          Built with ❤️ using React,
          Context API and LocalStorage.
        </p>

      </div>

    </div>
  );
}

export default Settings;