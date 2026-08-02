import { useTasks } from "../../context/TaskContext";
import { useGoals } from "../../context/GoalContext";
import { useNotes } from "../../context/NoteContext";
import "./OverviewCard.css";

function OverviewCard() {
  const { tasks } = useTasks();
  const { goals } = useGoals();
  const { notes } = useNotes();

  const completedGoals = goals.filter(
    (goal) => goal.completed
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const productivity =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  const overview = [
    {
      icon: "📋",
      title: "Tasks",
      value: tasks.length,
      color: "#2563EB",
    },
    {
      icon: "🎯",
      title: "Goals",
      value: goals.length,
      color: "#22C55E",
    },
    {
      icon: "🏆",
      title: "Completed",
      value: completedGoals,
      color: "#F59E0B",
    },
    {
      icon: "📝",
      title: "Notes",
      value: notes.length,
      color: "#8B5CF6",
    },
  ];

  return (
    <div className="overview-card">

      <div className="overview-header">
        <h2>📊 Life OS Overview</h2>
        <span>{productivity}% Productive</span>
      </div>

      <div className="overview-grid">

        {overview.map((item) => (
          <div className="overview-item" key={item.title}>
            <div
              className="overview-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <h3>{item.value}</h3>

            <p>{item.title}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default OverviewCard;