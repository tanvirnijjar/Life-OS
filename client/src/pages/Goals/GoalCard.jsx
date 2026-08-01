import "./GoalCard.css";

const GoalCard = ({ goal, onDelete, updateProgress }) => {
  return (
    <div className="goal-card">
      <div className="goal-header">
        <h3>{goal.title}</h3>
        <span className={`priority ${goal.priority.toLowerCase()}`}>
          {goal.priority}
        </span>
      </div>

      <p><strong>Target:</strong> {goal.targetDate}</p>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${goal.progress}%` }}
        ></div>
      </div>

      <p>{goal.progress}% Completed</p>

      <div className="goal-actions">
        <button onClick={() => updateProgress(goal.id, -10)}>-10%</button>
        <button onClick={() => updateProgress(goal.id, 10)}>+10%</button>
        <button className="delete" onClick={() => onDelete(goal.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default GoalCard;