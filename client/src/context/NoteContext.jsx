import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

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
        pinned: false,
      },
    ]);

    toast.success("📝 Note Added Successfully");
  };

  const deleteNote = (id) => {
    setNotes((prev) =>
      prev.filter((note) => note.id !== id)
    );

    toast.success("🗑 Note Deleted");
  };

  const togglePin = (id) => {
    setNotes((prev) =>
      prev.map((note) => {
        if (note.id === id) {
          const updatedNote = {
            ...note,
            pinned: !note.pinned,
          };

          toast.success(
            updatedNote.pinned
              ? "📌 Note Pinned"
              : "📍 Note Unpinned"
          );

          return updatedNote;
        }

        return note;
      })
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

    toast.success("✏️ Note Updated");
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