import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import {
  getTasks,
  createTask,
  updateTask as updateTaskService,
  deleteTask as deleteTaskService,
  toggleTask as toggleTaskService,
} from "../services/taskService";

import {
  scheduleTaskNotification,
  cancelTaskNotification,
} from "../services/notificationService";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // ==========================
  // Load Tasks
  // ==========================
  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data.tasks || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ==========================
  // Add Task
  // ==========================
  const addTask = async (task) => {
    try {
      const data = await createTask(task);

      setTasks((prev) => [data.task, ...prev]);

      await scheduleTaskNotification(data.task);

      toast.success("✅ Task Added Successfully");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to add task"
      );
    }
  };

  // ==========================
  // Toggle Task
  // ==========================
  const toggleTask = async (id) => {
    try {
      const data = await toggleTaskService(id);

      setTasks((prev) =>
        prev.map((task) =>
          task._id === id ? data.task : task
        )
      );

      if (data.task.completed) {
        await cancelTaskNotification(id);
      } else {
        await scheduleTaskNotification(data.task);
      }

      toast.success(
        data.task.completed
          ? "🎉 Task Completed!"
          : "📌 Task Marked Pending"
      );
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  // ==========================
  // Update Task
  // ==========================
  const updateTask = async (id, title) => {
    try {
      const data = await updateTaskService(id, {
        title,
      });

      setTasks((prev) =>
        prev.map((task) =>
          task._id === id ? data.task : task
        )
      );

      await cancelTaskNotification(id);
      await scheduleTaskNotification(data.task);

      toast.success("✏️ Task Updated");
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  // ==========================
  // Delete Task
  // ==========================
  const deleteTask = async (id) => {
    try {
      await deleteTaskService(id);

      await cancelTaskNotification(id);

      setTasks((prev) =>
        prev.filter((task) => task._id !== id)
      );

      toast.success("🗑 Task Deleted");
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  // ==========================
  // Clear Completed Tasks
  // ==========================
  const clearCompletedTasks = async () => {
    try {
      const completedTasks = tasks.filter(
        (task) => task.completed
      );

      if (completedTasks.length === 0) {
        toast.error("No completed tasks found.");
        return;
      }

      await Promise.all(
        completedTasks.map((task) =>
          deleteTaskService(task._id)
        )
      );

      await Promise.all(
        completedTasks.map((task) =>
          cancelTaskNotification(task._id)
        )
      );

      setTasks((prev) =>
        prev.filter((task) => !task.completed)
      );

      toast.success(
        `🗑 Cleared ${completedTasks.length} completed task${
          completedTasks.length > 1 ? "s" : ""
        }`
      );
    } catch (error) {
      toast.error("Failed to clear completed tasks");
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        fetchTasks,
        addTask,
        toggleTask,
        updateTask,
        deleteTask,
        clearCompletedTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}