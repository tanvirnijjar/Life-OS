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
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
        </>
      )}

      <small>{note.category}</small>

      <div className="note-buttons">

        {editing ? (
          <button onClick={saveEdit}>
            💾 Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
          >
            ✏️ Edit
          </button>
        )}

        <button
          onClick={() => togglePin(note.id)}
        >
          📌
        </button>

        <button
          className="delete"
          onClick={() => deleteNote(note.id)}
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
}

export default NoteCard;