

import { useEffect, useState } from "react";
import notes from "../data/notes.json";
import { v4 as uuidv4 } from "uuid";

type ArrProps = {
  id: string;
  title: string;
  description: string;
  createDate: string;
};

function useNotes() {
  const [notesData, setNotesData] = useState<Array<ArrProps>>();
  const [notesDataError, setNotesDataError] = useState();

  useEffect(() => {
    async function getData() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setNotesData(notes);
      } catch (error: any) {
        setNotesDataError(error);
      }
    }
    getData();
  }, []);

  function createNote(title: string, description: string) {
    const newNote = {
      id: uuidv4(),
      title,
      description,
      createDate: new Date().toISOString(),
    };

    setNotesData((oldNotes: any) => {
      return [...oldNotes, newNote];
    });
  }

  return {
    notesData,
    notesDataError,
    createNote,
  };
}

export default useNotes;
