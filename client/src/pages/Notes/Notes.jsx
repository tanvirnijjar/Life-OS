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
    updateNote,
  } = useNotes();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const togglePin = (id) => {
    const note = notes.find((n) => n.id === id);

    if (!note) return;

    updateNote({
      ...note,
      pinned: !note.pinned,
    });
  };

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
    .sort((a, b) => Number(b.pinned) - Number(a.pinned));

  return (
    <div className="notes-page">
      <h1>📝 Notes</h1>

      <NoteForm addNote={addNote} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <div className="notes-grid">
        {filteredNotes.length === 0 ? (
          <p className="empty">
            No notes found 📒
          </p>
        ) : (
          filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              togglePin={togglePin}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Notes;