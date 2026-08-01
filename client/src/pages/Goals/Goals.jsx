import "./Goals.css";

import GoalForm from "./GoalForm";
import GoalCard from "./GoalCard";
import { useGoals } from "../../context/GoalContext";

function Goals() {
  const {
    goals,
    addGoal,
    toggleComplete,
    deleteGoal,
    updateGoal,
  } = useGoals();

  return (
    <div className="goals-page">
      <h1>🎯 Goals</h1>

      <GoalForm addGoal={addGoal} />

      {goals.length === 0 ? (
        <p className="empty-goals">
          No goals yet. Start achieving something amazing! 🚀
        </p>
      ) : (
        <div className="goals-grid">
          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              updateGoal={updateGoal}
              toggleComplete={toggleComplete}
              deleteGoal={deleteGoal}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Goals;