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
    if (!title.trim()) return;

    editGoal(goal.id, {
      title,
      priority,
      deadline,
      progress: Number(progress),
    });

    setEditing(false);
  };

  return (
    <div
      className={`goal-card ${
        goal.completed ? "completed-goal" : ""
      }`}
    >
      {editing ? (
        <>
          <input
            type="text"
            placeholder="Goal Title"
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

          <ProgressBar progress={progress} />

          <div className="goal-buttons">
            <button
              className="complete-btn"
              onClick={handleSave}
            >
              💾 Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="goal-header">
            <h2>{goal.title}</h2>

            <span
              className={`priority ${goal.priority.toLowerCase()}`}
            >
              {goal.priority}
            </span>
          </div>

          <ProgressBar progress={goal.progress} />

          <p>
            <strong>Progress:</strong> {goal.progress}%
          </p>

          <p>
            <strong>Deadline:</strong> {goal.deadline}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {goal.completed ? "Completed ✅" : "In Progress 🚀"}
          </p>

          <div className="goal-buttons">
            <button
              className="complete-btn"
              onClick={() => setEditing(true)}
            >
              ✏️ Edit
            </button>

            <button
              className="complete-btn"
              onClick={() => toggleComplete(goal.id)}
            >
              {goal.completed ? "↩ Undo" : "✅ Complete"}
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteGoal(goal.id)}
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