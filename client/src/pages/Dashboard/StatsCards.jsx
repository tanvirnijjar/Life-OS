import "./StatsCards.css";

function StatsCards({
  totalTasks,
  completedTasks,
  pendingTasks,
  productivity,
}) {
  const stats = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: "📋",
      subtitle: "All Tasks",
      color: "blue",
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: "✅",
      subtitle: "Great Work",
      color: "green",
    },
    {
      title: "Pending",
      value: pendingTasks,
      icon: "⏳",
      subtitle: "Keep Going",
      color: "orange",
    },
    {
      title: "Productivity",
      value: `${productivity}%`,
      icon: "🚀",
      subtitle: "Today's Score",
      color: "purple",
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <div
          key={item.title}
          className={`stats-card ${item.color}`}
        >
          <div className="stats-header">
            <span className="stats-icon">
              {item.icon}
            </span>
          </div>

          <h2>{item.value}</h2>

          <h3>{item.title}</h3>

          <small>{item.subtitle}</small>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;