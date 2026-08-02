import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

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

    toast.success("🎯 Goal Added Successfully");
  };

  const deleteGoal = (id) => {
    setGoals((prev) =>
      prev.filter((goal) => goal.id !== id)
    );

    toast.success("🗑 Goal Deleted");
  };

  const toggleComplete = (id) => {
    setGoals((prev) =>
      prev.map((goal) => {
        if (goal.id === id) {
          const updatedGoal = {
            ...goal,
            completed: !goal.completed,
          };

          toast.success(
            updatedGoal.completed
              ? "🏆 Goal Completed!"
              : "📌 Goal Marked In Progress"
          );

          return updatedGoal;
        }

        return goal;
      })
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

    toast.success("✏️ Goal Updated");
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