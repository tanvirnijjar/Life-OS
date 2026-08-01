import { createContext, useContext, useEffect, useState } from "react";

const GoalContext = createContext();

export function GoalProvider({ children }) {
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
    setGoals((prev) => [
      ...prev,
      {
        ...goal,
        id: Date.now(),
        completed: false,
      },
    ]);
  };

  const deleteGoal = (id) => {
    setGoals((prev) =>
      prev.filter((goal) => goal.id !== id)
    );
  };

  const toggleComplete = (id) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              completed: !goal.completed,
            }
          : goal
      )
    );
  };

  const updateGoal = (updatedGoal) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === updatedGoal.id
          ? updatedGoal
          : goal
      )
    );
  };

  return (
    <GoalContext.Provider
      value={{
        goals,
        addGoal,
        deleteGoal,
        toggleComplete,
        updateGoal,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
}

export function useGoals() {
  return useContext(GoalContext);
}