import { useState } from "react";
import "./Notes.css";

import { useNotes } from "../../context/NoteContext";

import NoteForm from "./NoteForm";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import NoteCard from "./NoteCard";

function Notes() {
  const {
    notes,
    addNote,
    deleteNote,
    togglePin,
    editNote,
  } = useNotes();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredNotes = notes
    .filter((note) =>
      note.title
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter((note) => {
      if (category === "All") return true;
      return note.category === category;
    })
    .sort((a, b) => b.pinned - a.pinned);

  return (
  <div className="notes-page">

    {/* Header */}
    <div className="notes-header">
      <div>
        <h1>Notes</h1>
        <p>
          Organize your ideas, study notes and important information.
        </p>
      </div>
    </div>

    {/* Controls */}
    <div className="notes-controls">

      <NoteForm addNote={addNote} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

    </div>

    {/* Notes Grid */}
    <div className="notes-grid">

      {filteredNotes.length === 0 ? (

        <div className="empty-state">

          <h2>📝 No Notes Yet</h2>

          <p>
            Create your first note to get started.
          </p>

        </div>

      ) : (

        filteredNotes.map((note) => (

          <NoteCard
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            togglePin={togglePin}
            editNote={editNote}
          />

        ))

      )}

    </div>

  </div>
);
}

export default Notes;