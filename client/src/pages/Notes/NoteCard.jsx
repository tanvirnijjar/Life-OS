function NoteCard({
  note,
  deleteNote,
  togglePin,
}) {
  return (
    <div className={`note-card ${note.pinned ? "pinned" : ""}`}>
      <div className="note-header">
        <h2>{note.title}</h2>

        <button
          className="pin-btn"
          onClick={() => togglePin(note.id)}
        >
          {note.pinned ? "📌" : "📍"}
        </button>
      </div>

      <p className="note-description">
        {note.description}
      </p>

      <div className="note-footer">
        <span className="note-category">
          🏷 {note.category}
        </span>

        <span className="note-date">
          📅 {note.createdAt}
        </span>
      </div>

      <button
        className="delete-note-btn"
        onClick={() => deleteNote(note.id)}
      >
        🗑 Delete
      </button>
    </div>
  );
}

export default NoteCard;