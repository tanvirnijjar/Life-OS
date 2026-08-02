import { useNotes } from "../../context/NoteContext";
import "./RecentNotes.css";

function RecentNotes() {
  const { notes } = useNotes();

  const recentNotes = notes.slice(0, 3);

  return (
    <div className="notes-card">
      <div className="notes-header">
        <h2>📝 Recent Notes</h2>
        <span>{recentNotes.length} Notes</span>
      </div>

      {recentNotes.length === 0 ? (
        <div className="empty-notes">
          <h3>📝 No Notes Yet</h3>
          <p>Create your first note to get started.</p>
        </div>
      ) : (
        <div className="notes-list">
          {recentNotes.map((note) => (
            <div className="note-item" key={note.id}>
              <h3>{note.title}</h3>

              <p>{note.category}</p>

              <div className="note-tag">
                📒 {note.category}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentNotes;