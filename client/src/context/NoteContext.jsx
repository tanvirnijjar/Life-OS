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

  const togglePin = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, pinned: !note.pinned }
          : note
      )
    );
  };

  const editNote = (id, updatedNote) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, ...updatedNote }
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
        togglePin,
        editNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export function useNotes() {
  return useContext(NoteContext);
}