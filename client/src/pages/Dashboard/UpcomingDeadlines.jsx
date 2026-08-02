import { useTasks } from "../../context/TaskContext";
import { useGoals } from "../../context/GoalContext";
import "./UpcomingDeadlines.css";

function UpcomingDeadlines() {
  const { tasks } = useTasks();
  const { goals } = useGoals();

  const upcoming = [
    ...tasks
      .filter((task) => task.dueDate && !task.completed)
      .map((task) => ({
        id: `task-${task.id}`,
        title: task.text,
        date: task.dueDate,
        type: "Task",
      })),

    ...goals
      .filter((goal) => goal.deadline && !goal.completed)
      .map((goal) => ({
        id: `goal-${goal.id}`,
        title: goal.title,
        date: goal.deadline,
        type: "Goal",
      })),
  ]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  return (
    <div className="deadline-card">
      <div className="deadline-header">
        <h2>📅 Upcoming Deadlines</h2>
        <span>{upcoming.length} Upcoming</span>
      </div>

      {upcoming.length === 0 ? (
        <div className="empty-deadline">
          <h3>🎉 You're all caught up!</h3>
          <p>No upcoming deadlines.</p>
        </div>
      ) : (
        <div className="deadline-list">
          {upcoming.map((item) => (
            <div className="deadline-item" key={item.id}>
              <div className="deadline-icon">
                {item.type === "Task" ? "📋" : "🎯"}
              </div>

              <div className="deadline-info">
                <h3>{item.title}</h3>
                <p>{item.type}</p>
              </div>

              <div className="deadline-date">
                📅 {item.date}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UpcomingDeadlines;