import { useState } from "react";
import "./Tasks.css";
import { useTasks } from "../../context/TaskContext";

import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskFilter from "./TaskFilter";
import TaskCard from "./TaskCard";

function Tasks() {
  const { tasks, setTasks } = useTasks();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.text.toLowerCase().includes(search.toLowerCase())
    )
    .filter((task) => {
      if (filter === "Active") return !task.completed;
      if (filter === "Completed") return task.completed;
      return true;
    });

  return (
    <div className="tasks-page">
      <h1>✅ Task Manager</h1>

      <TaskForm
        tasks={tasks}
        setTasks={setTasks}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <TaskFilter
        filter={filter}
        setFilter={setFilter}
      />

      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <p className="empty">
            No matching tasks found 🚀
          </p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Tasks;