import { useState } from "react";
import ProgressBar from "./ProgressBar";

function GoalCard({
  goal,
  editGoal,
  toggleComplete,
  deleteGoal,
}) {
  const [editing, setEditing] = useState(false);

  const [title, setTitle] = useState(goal.title);
  const [priority, setPriority] = useState(goal.priority);
  const [deadline, setDeadline] = useState(goal.deadline);
  const [progress, setProgress] = useState(goal.progress);

  const handleSave = () => {
    editGoal(goal.id, {
      title,
      priority,
      deadline,
      progress: Number(progress),
    });

    setEditing(false);
  };

  return (
    <div className="goal-card">
      {editing ? (
        <>
          <input
            type="text"
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
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          />

          <ProgressBar progress={progress} />

          <div className="goal-buttons">
            <button onClick={handleSave}>
              💾 Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="goal-top">
            <h2>{goal.title}</h2>

            <span
              className={`priority ${goal.priority.toLowerCase()}`}
            >
              {goal.priority}
            </span>
          </div>

          <ProgressBar progress={goal.progress} />

          <h3>{goal.progress}% Complete</h3>

          <p>📅 Deadline: {goal.deadline}</p>

          <div className="goal-buttons">
            <button
              onClick={() => setEditing(true)}
            >
              ✏ Edit
            </button>

            <button
              onClick={() =>
                toggleComplete(goal.id)
              }
            >
              {goal.completed
                ? "↩ Undo"
                : "✅ Complete"}
            </button>

            <button
              className="delete"
              onClick={() =>
                deleteGoal(goal.id)
              }
            >
              🗑 Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default GoalCard;