import { useEffect, useState } from "react";
import "./Goals.css";

import GoalForm from "./GoalForm";
import GoalCard from "./GoalCard";

function Goals() {
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("lifeos_goals");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "lifeos_goals",
      JSON.stringify(goals)
    );
  }, [goals]);

  const addGoal = (goal) => {
    setGoals([
      ...goals,
      {
        ...goal,
        id: Date.now(),
        completed: false,
      },
    ]);
  };

  const editGoal = (id, updatedGoal) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? { ...goal, ...updatedGoal }
          : goal
      )
    );
  };

  const toggleComplete = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              completed: !goal.completed,
            }
          : goal
      )
    );
  };

  const deleteGoal = (id) => {
    setGoals(
      goals.filter((goal) => goal.id !== id)
    );
  };

  return (
    <div className="goals-page">
      <h1>🎯 Goals</h1>

      <GoalForm addGoal={addGoal} />

      {goals.length === 0 ? (
        <p className="empty-goals">
          No goals yet. Start achieving something amazing! 🚀
        </p>
      ) : (
        goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            editGoal={editGoal}
            toggleComplete={toggleComplete}
            deleteGoal={deleteGoal}
          />
        ))
      )}
    </div>
  );
}

export default Goals;