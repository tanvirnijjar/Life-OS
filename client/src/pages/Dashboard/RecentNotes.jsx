import { useNotes } from "../../context/NoteContext";

function RecentNotes() {
  const { notes } = useNotes();

  const recentNotes = notes.slice(0, 3);

  return (
    <div className="section-card">
      <h2>📝 Recent Notes</h2>

      {recentNotes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <ul>
          {recentNotes.map((note) => (
            <li key={note.id}>
              <strong>{note.title}</strong>

              <br />

              <small>
                {note.category}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecentNotes;