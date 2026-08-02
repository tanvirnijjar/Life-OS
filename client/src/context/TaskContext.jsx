import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("lifeos_tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "lifeos_tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [
      ...prev,
      {
        ...task,
        id: Date.now(),
        completed: false,
      },
    ]);

    toast.success("✅ Task Added Successfully");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          const updatedTask = {
            ...task,
            completed: !task.completed,
          };

          toast.success(
            updatedTask.completed
              ? "🎉 Task Completed!"
              : "📌 Task Marked Pending"
          );

          return updatedTask;
        }

        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );

    toast.success("🗑 Task Deleted");
  };

  const updateTask = (id, newText) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              text: newText,
            }
          : task
      )
    );

    toast.success("✏️ Task Updated");
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        toggleTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}