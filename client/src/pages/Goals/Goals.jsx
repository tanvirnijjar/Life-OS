import { useEffect, useState } from "react";
import "./Goals.css";

import GoalForm from "./GoalForm";
import GoalCard from "./GoalCard";

function Goals() {
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("lifeos_goals");
    return savedGoals ? JSON.parse(savedGoals) : [];
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

  const completedGoals = goals.filter(
    (goal) => goal.completed
  ).length;

  const activeGoals = goals.length - completedGoals;

  return (
    <div className="goals-page">

      {/* Header */}
      <div className="goals-header">
        <div>
          <h1>Goals</h1>
          <p>
            Track your progress and achieve your dreams.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="goals-summary">

        <div className="summary-card">
          <h2>{goals.length}</h2>
          <p>Total Goals</p>
        </div>

        <div className="summary-card">
          <h2>{completedGoals}</h2>
          <p>Completed</p>
        </div>

        <div className="summary-card">
          <h2>{activeGoals}</h2>
          <p>Active</p>
        </div>

      </div>

      {/* Goal Form */}
      <div className="goal-controls">
        <GoalForm addGoal={addGoal} />
      </div>

      {/* Goals */}
      <div className="goals-list">

        {goals.length === 0 ? (

          <div className="empty-state">
            <h2>🎯 No Goals Yet</h2>
            <p>
              Set your first goal and start achieving something amazing.
            </p>
          </div>

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

    </div>
  );
}

export default Goals;