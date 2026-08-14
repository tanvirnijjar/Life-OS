import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DaisyAssistant.css";

export default function DaisyAssistant() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {/* Floating Daisy */}
      <div
        className="daisy-container"
        onClick={() => setOpen(!open)}
      >
        <div className="daisy-avatar">🌼</div>

        <div className="daisy-message">
          <h4>Daisy AI</h4>

          <p>Hello Tanvir 👋</p>

          <span>How can I help today?</span>
        </div>
      </div>

      {/* Popup */}
      {open && (
        <div className="daisy-popup">

          <div className="popup-header">

            <h3>🌼 Daisy AI</h3>

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

          </div>

          <p>
            Welcome back! Choose what you'd like to do.
          </p>

          <button onClick={() => goTo("/tasks")}>
            ✅ Manage Tasks
          </button>

          <button onClick={() => goTo("/calendar")}>
            📅 Open Calendar
          </button>

          <button onClick={() => goTo("/notes")}>
            📝 My Notes
          </button>

          <button onClick={() => goTo("/goals")}>
            🎯 Goals
          </button>

          <button onClick={() => goTo("/profile")}>
            👤 Profile
          </button>

          <button onClick={() => goTo("/settings")}>
            ⚙️ Settings
          </button>

          <button
            onClick={() =>
              alert(
                "🌼 Believe in yourself. Every completed task is a step closer to your dreams!"
              )
            }
          >
            💙 Motivate Me
          </button>

        </div>
      )}
    </>
  );
}