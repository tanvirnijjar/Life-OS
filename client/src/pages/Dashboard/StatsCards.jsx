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
      subtitle: `${totalTasks} Tasks`,
      color: "blue",
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: "✅",
      subtitle: "Great Job 🎉",
      color: "green",
    },
    {
      title: "Pending",
      value: pendingTasks,
      icon: "⏳",
      subtitle: "Keep Going 💪",
      color: "orange",
    },
    {
      title: "Productivity",
      value: `${productivity}%`,
      icon: "🚀",
      subtitle:
        productivity >= 80
          ? "Excellent ⭐"
          : productivity >= 50
          ? "On Track 👍"
          : "Let's Improve 💪",
      color: "purple",
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <div
          className={`card ${item.color}`}
          key={item.title}
        >
          <div className="card-top">
            <div className="card-icon">
              {item.icon}
            </div>
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