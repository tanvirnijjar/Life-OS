import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "➕ Add Task",
      path: "/tasks",
    },
    {
      title: "📝 Notes",
      path: "/notes",
    },
    {
      title: "🎯 Goals",
      path: "/goals",
    },
    {
      title: "📅 Calendar",
      path: "/calendar",
    },
  ];

  return (
    <div className="section-card">
      <h2>⚡ Quick Actions</h2>

      <div className="quick-actions">
        {actions.map((action) => (
          <button
            key={action.title}
            onClick={() => navigate(action.path)}
          >
            {action.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;