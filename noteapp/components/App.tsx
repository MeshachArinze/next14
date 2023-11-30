"use client";

import useNotes from "@/hooks/useNotes";
import Menu from "./Menu";
import NoteList from "./NoteList";

const App = () => {
  const { notesData, notesDataError, createNote } = useNotes();

  if (notesDataError) {
    return <div className="container">error: {notesDataError}</div>;
  }

  if (!notesData) {
    return <div className="container">...loading</div>;
  }

  function createNoteFn() {
    const timeOfDay = new Date().toLocaleTimeString("en", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    createNote(
      `Note at ${timeOfDay}`,
      "This sample note was created at " + timeOfDay
    );
  }

  return (
    <div className="container">
      <Menu createNoteFn={createNoteFn} />
      <NoteList notesData={notesData} />
    </div>
  );
};

export default App;
