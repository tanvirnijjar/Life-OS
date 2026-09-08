import { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [reminderTime, setReminderTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    await addTask({
      title: task.trim(),
      priority,
      dueDate,
      reminderTime,
    });

    setTask("");
    setPriority("Medium");
    setDueDate("");
    setReminderTime("");
  };

  return (
    <form
      className="task-input"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        type="text"
        placeholder="What would you like to accomplish today?"
        value={task}
        maxLength={100}
        autoFocus
        onChange={(e) => setTask(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">🔴 High Priority</option>
        <option value="Medium">🟡 Medium Priority</option>
        <option value="Low">🟢 Low Priority</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <input
        type="time"
        value={reminderTime}
        onChange={(e) => setReminderTime(e.target.value)}
        title="Reminder time"
      />

      <button type="submit">
        ➕ Add Task
      </button>
    </form>
  );
}

export default TaskForm;