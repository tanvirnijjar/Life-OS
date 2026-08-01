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
      subtitle: "All your tasks",
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: "✅",
      subtitle: "Great progress",
    },
    {
      title: "Pending",
      value: pendingTasks,
      icon: "⏳",
      subtitle: "Keep going",
    },
    {
      title: "Productivity",
      value: `${productivity}%`,
      icon: "📈",
      subtitle: "Today's efficiency",
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <div className="card" key={item.title}>
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