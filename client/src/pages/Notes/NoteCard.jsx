import "./NoteCard.css";

const NoteCard = ({ note, onDelete }) => {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>

      <p>{note.content}</p>

      <button
        className="delete-btn"
        onClick={() => onDelete(note.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;