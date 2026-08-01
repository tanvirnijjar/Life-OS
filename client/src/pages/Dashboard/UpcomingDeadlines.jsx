import { useTasks } from "../../context/TaskContext";
import { useGoals } from "../../context/GoalContext";

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
    <div className="section-card">
      <h2>📅 Upcoming Deadlines</h2>

      {upcoming.length === 0 ? (
        <p>No upcoming deadlines 🎉</p>
      ) : (
        <ul>
          {upcoming.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <br />
              <small>
                {item.type} • 📅 {item.date}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UpcomingDeadlines;