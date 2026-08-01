import { useState } from "react";

function GoalForm({ addGoal }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addGoal({
      title,
      priority,
      deadline,
      progress: Number(progress),
    });

    setTitle("");
    setPriority("Medium");
    setDeadline("");
    setProgress(0);
  };

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="🎯 Goal title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <input
        type="number"
        min="0"
        max="100"
        placeholder="Progress %"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />

      <button type="submit">
        + Add Goal
      </button>
    </form>
  );
}

export default GoalForm;