import { useState } from "react";

function TaskForm({ tasks, setTasks }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const addTask = () => {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
      priority,
      dueDate,
    };

    setTasks([...tasks, newTask]);

    setTask("");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">🔴 High</option>
        <option value="Medium">🟡 Medium</option>
        <option value="Low">🟢 Low</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button onClick={addTask}>
        ➕ Add Task
      </button>
    </div>
  );
}

export default TaskForm;