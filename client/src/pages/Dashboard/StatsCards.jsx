function StatsCards({
  totalTasks,
  completedTasks,
  pendingTasks,
  productivity,
}) {
  const stats = [
    {
      title: "Tasks",
      value: totalTasks,
      icon: "✅",
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: "🎉",
    },
    {
      title: "Pending",
      value: pendingTasks,
      icon: "⏳",
    },
    {
      title: "Productivity",
      value: `${productivity}%`,
      icon: "📈",
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <div className="card" key={item.title}>
          <div className="card-icon">
            {item.icon}
          </div>

          <h2>{item.value}</h2>

          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;