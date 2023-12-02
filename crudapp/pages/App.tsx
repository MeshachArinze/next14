"use client";

import NoteList from "./NoteList";
import useNotes from "@/hooks/useNotes";
import useNotesModal from "@/hooks/useNotesModal";
import Menu from "./Menu";
import { createContext } from "react";

type ProviderProps = {
  notesData: [] | undefined;
  notesDataError: string;
  createNote: (description: string, title: string) => void;
  updateNote: (id: string, title: string, description: string) => void;
  deleteNote: (id: string) => void;
};

export const NotesContext = createContext({
  notesData: [],
  notesDataError: "",
  createNote: () => {},
  updateNote: () => {},
  deleteNote: () => {},
});

export const NotesModalContext = createContext({
  modalShow: false,
  setModalShow: () => {},
  modalNoteId: 0,
  setModalNoteId: () => {},
  modalTitle: "",
  setModalTitle: () => {},
  modalDescription: "",
  setModalDescription: () => {},
});

function App() {
  const contextValue = useNotes();
  const contextValueNotesModal = useNotesModal();

  if (contextValue.notesDataError) {
    return (
      <div className="container">error: {contextValue.notesDataError}</div>
    );
  }
  if (!contextValue.notesData) {
    return <div className="container">...loading</div>;
  }

  return (
    <div className="container">
      <NotesContext.Provider value={contextValue}>
        <NotesModalContext.Provider value={contextValueNotesModal}>
          <Menu />
          <NoteList />
        </NotesModalContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}

export default App;
