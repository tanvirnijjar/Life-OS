import { useState } from "react";

function NoteCard({
  note,
  deleteNote,
  togglePin,
  editNote,
}) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const saveEdit = () => {
    if (!title.trim()) return;

    editNote(note.id, {
      title,
      description,
    });

    setEditing(false);
  };

  return (
    <div className="note-card">
      {editing ? (
        <>
          <input
            type="text"
            value={title}
            placeholder="Note title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={description}
            placeholder="Write your note..."
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="note-footer">
            <span className="note-category">
              {note.category}
            </span>

            <div className="note-actions">
              <button
                className="pin-btn"
                onClick={saveEdit}
              >
                💾 Save
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>{note.title}</h2>

          <p>{note.description}</p>

          <div className="note-footer">
            <span className="note-category">
              {note.category}
            </span>

            <div className="note-actions">
              <button
                className="pin-btn"
                onClick={() => togglePin(note.id)}
              >
                {note.pinned ? "📌 Pinned" : "📍 Pin"}
              </button>

              <button
                className="pin-btn"
                onClick={() => setEditing(true)}
              >
                ✏️ Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteNote(note.id)}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteCard;