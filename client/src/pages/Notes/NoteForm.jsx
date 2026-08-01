import { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Study");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    addNote({
      title,
      description,
      category,
      pinned: false,
      createdAt: new Date().toLocaleDateString(),
    });

    setTitle("");
    setDescription("");
    setCategory("Study");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
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

      <button type="submit">
        ➕ Add Note
      </button>
    </form>
  );
}

export default NoteForm;