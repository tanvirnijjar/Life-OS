import "./Dashboard.css";
import { useTasks } from "../../context/TaskContext";

function Dashboard() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;
  const pendingTasks = totalTasks - completedTasks;

  const productivity =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  const currentHour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (currentHour < 12) {
    greeting = "Good Morning ☀️";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon 🌤️";
  }

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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
      value: productivity + "%",
      icon: "📈",
    },
  ];

  const todayTasks = [
    "Complete Life OS Dashboard",
    "Revise Python",
    "Push latest code to GitHub",
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>{greeting}, Tanvir 👋</h1>
          <p>{today}</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((item) => (
          <div className="card" key={item.title}>
            <div className="card-icon">{item.icon}</div>

            <h2>{item.value}</h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="dashboard-sections">
        <div className="section-card">
          <h2>🔥 Today's Focus</h2>

          <ul>
            <li>🚀 Complete Life OS</li>
            <li>📚 Prepare for Python Test</li>
            <li>💧 Drink enough water</li>
          </ul>
        </div>

        <div className="section-card">
          <h2>✅ Today's Tasks</h2>

          <ul>
            {todayTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;