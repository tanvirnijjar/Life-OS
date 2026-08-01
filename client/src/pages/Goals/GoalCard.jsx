import ProgressBar from "./ProgressBar";

function GoalCard({
  goal,
  toggleComplete,
  deleteGoal,
}) {
  return (
    <div
      className={`goal-card ${
        goal.completed ? "completed-goal" : ""
      }`}
    >
      <div className="goal-header">
        <h2>{goal.title}</h2>

        <span
          className={`priority ${goal.priority.toLowerCase()}`}
        >
          {goal.priority}
        </span>
      </div>

      <ProgressBar progress={goal.progress} />

      <h3>{goal.progress}% Complete</h3>

      <p>📅 Deadline: {goal.deadline}</p>

      <div className="goal-buttons">
        <button
          className="complete-btn"
          onClick={() => toggleComplete(goal.id)}
        >
          {goal.completed ? "↩ Reopen" : "✅ Complete"}
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteGoal(goal.id)}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default GoalCard;