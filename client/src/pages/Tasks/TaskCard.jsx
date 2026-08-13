import { useState } from "react";

function TaskCard({
  task,
  toggleTask,
  deleteTask,
  updateTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSave = async () => {
    if (!editedTitle.trim()) return;

    await updateTask(task._id, editedTitle);

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
          onChange={() => toggleTask(task._id)}
        />

        <div className="task-content">
          {isEditing ? (
            <input
              className="edit-input"
              value={editedTitle}
              onChange={(e) =>
                setEditedTitle(e.target.value)
              }
            />
          ) : (
            <>
              <span>{task.title}</span>

              <div className="task-info">
                <span
                  className={`priority ${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>

                {task.dueDate && (
                  <span className="date">
                    📅{" "}
                    {new Date(task.dueDate).toLocaleDateString()}
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
                setEditedTitle(task.title);
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
              onClick={() => deleteTask(task._id)}
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