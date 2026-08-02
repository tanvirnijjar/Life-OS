import { useNavigate } from "react-router-dom";
import "./QuickActions.css";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add Task",
      icon: "➕",
      color: "#2563EB",
      path: "/tasks",
    },
    {
      title: "Notes",
      icon: "📝",
      color: "#F59E0B",
      path: "/notes",
    },
    {
      title: "Goals",
      icon: "🎯",
      color: "#22C55E",
      path: "/goals",
    },
    {
      title: "Calendar",
      icon: "📅",
      color: "#8B5CF6",
      path: "/calendar",
    },
  ];

  return (
    <div className="quick-card">
      <div className="quick-header">
        <h2>⚡ Quick Actions</h2>
        <p>Jump to your most-used features</p>
      </div>

      <div className="quick-grid">
        {actions.map((action) => (
          <div
            key={action.title}
            className="quick-item"
            onClick={() => navigate(action.path)}
          >
            <div
              className="quick-icon"
              style={{ background: action.color }}
            >
              {action.icon}
            </div>

            <h3>{action.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;