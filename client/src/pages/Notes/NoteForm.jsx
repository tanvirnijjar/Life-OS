import { useState } from "react";

function NoteForm({ notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Study");

  const addNote = () => {
    if (!title.trim() || !description.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      description,
      category,
      pinned: false,
      createdAt: new Date().toLocaleDateString(),
    };

    setNotes([newNote, ...notes]);

    setTitle("");
    setDescription("");
    setCategory("Study");
  };

  return (
    <div className="note-form">
      <input
        type="text"
        placeholder="📝 Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your note..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="5"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Study</option>
        <option>Coding</option>
        <option>Ideas</option>
        <option>Personal</option>
      </select>

      <button onClick={addNote}>
        ➕ Add Note
      </button>
    </div>
  );
}

export default NoteForm;