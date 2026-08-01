import { useEffect, useState } from "react";
import "./Notes.css";

import NoteForm from "./NoteForm";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import NoteCard from "./NoteCard";

function Notes() {
  const [notes, setNotes] =useState(() => {
    const saved = localStorage.getItem("lifeos_notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem(
      "lifeos_notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const togglePin = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, pinned: !note.pinned }
          : note
      )
    );
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
    .sort((a, b) => b.pinned - a.pinned);

  return (
    <div className="notes-page">
      <h1>📝 Notes</h1>

      <NoteForm
        notes={notes}
        setNotes={setNotes}
      />

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