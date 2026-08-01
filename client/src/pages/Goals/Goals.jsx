import { useEffect, useState } from "react";
import "./Goals.css";
import GoalCard from "./GoalCard";

const Goals = () => {
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("lifeos-goals");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [targetDate, setTargetDate] = useState("");

  useEffect(() => {
    localStorage.setItem("lifeos-goals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = () => {
    if (!title.trim() || !targetDate) return;

    const newGoal = {
      id: Date.now(),
      title,
      priority,
      targetDate,
      progress: 0,
    };

    setGoals([newGoal, ...goals]);

    setTitle("");
    setPriority("Medium");
    setTargetDate("");
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const updateProgress = (id, amount) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              progress: Math.min(
                100,
                Math.max(0, goal.progress + amount)
              ),
            }
          : goal
      )
    );
  };

  return (
    <div className="goals-page">
      <h1>🎯 Goals</h1>

      <div className="goal-form">
        <input
          type="text"
          placeholder="Goal title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
        />

        <button onClick={addGoal}>Add Goal</button>
      </div>

      <div className="goals-grid">
        {goals.length > 0 ? (
          goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onDelete={deleteGoal}
              updateProgress={updateProgress}
            />
          ))
        ) : (
          <p className="empty-state">No goals added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Goals;