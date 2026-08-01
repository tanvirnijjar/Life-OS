import { useGoals } from "../../context/GoalContext";

function ActiveGoals() {
  const { goals } = useGoals();

  const activeGoals = goals
    .filter((goal) => !goal.completed)
    .slice(0, 3);

  return (
    <div className="section-card">
      <h2>🎯 Active Goals</h2>

      {activeGoals.length === 0 ? (
        <p>No active goals.</p>
      ) : (
        <ul>
          {activeGoals.map((goal) => (
            <li key={goal.id}>
              <strong>{goal.title}</strong>
              <br />
              <small>
                {goal.progress}% Complete • {goal.priority}
              </small>
              <br />
              <small>📅 {goal.deadline}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ActiveGoals;