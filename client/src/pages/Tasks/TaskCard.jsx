import { useState } from "react";

function TaskCard({
  task,
  toggleTask,
  deleteTask,
  updateTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    if (!editedText.trim()) return;

    updateTask(task.id, editedText);

    setIsEditing(false);
  };

  return (
    <div
      className={`task-card ${
        task.completed ? "completed" : ""
      }`}
    >
      <div className="task-text">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <div className="task-content">

          {isEditing ? (
            <input
              className="edit-input"
              value={editedText}
              onChange={(e) =>
                setEditedText(e.target.value)
              }
            />
          ) : (
            <>
              <span>{task.text}</span>

              <div className="task-info">
                <span
                  className={`priority ${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>

                {task.dueDate && (
                  <span className="date">
                    📅 {task.dueDate}
                  </span>
                )}
              </div>
            </>
          )}

        </div>
      </div>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button
              className="save-btn"
              onClick={handleSave}
            >
              💾
            </button>

            <button
              className="cancel-btn"
              onClick={() => {
                setEditedText(task.text);
                setIsEditing(false);
              }}
            >
              ❌
            </button>
          </>
        ) : (
          <>
            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              ✏️
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
            >
              🗑
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskCard;