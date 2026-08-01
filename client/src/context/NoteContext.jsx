import { createContext, useContext, useEffect, useState } from "react";

const NoteContext = createContext();

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("lifeos_notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "lifeos_notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (note) => {
    setNotes((prev) => [
      ...prev,
      {
        ...note,
        id: Date.now(),
      },
    ]);
  };

  const deleteNote = (id) => {
    setNotes((prev) =>
      prev.filter((note) => note.id !== id)
    );
  };

  const updateNote = (updatedNote) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === updatedNote.id
          ? updatedNote
          : note
      )
    );
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        updateNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export function useNotes() {
  return useContext(NoteContext);
}