import { useGoals } from "../../context/GoalContext";
import "./ActiveGoals.css";

function ActiveGoals() {
  const { goals } = useGoals();

  const activeGoals = goals
    .filter((goal) => !goal.completed)
    .slice(0, 3);

  return (
    <div className="goals-card">
      <div className="goals-header">
        <h2>🎯 Active Goals</h2>
        <span>{activeGoals.length} Active</span>
      </div>

      {activeGoals.length === 0 ? (
        <div className="empty-goals">
          <h3>🎯 No Goals Yet</h3>
          <p>Create your first goal and start making progress.</p>
        </div>
      ) : (
        <div className="goal-list">
          {activeGoals.map((goal) => (
            <div className="goal-item" key={goal.id}>
              <div className="goal-top">
                <h3>{goal.title}</h3>
                <span>{goal.progress}%</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>

              <div className="goal-footer">
                <small>🏷 {goal.priority}</small>
                <small>📅 {goal.deadline}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ActiveGoals;