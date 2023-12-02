import { useState, useEffect } from "react";
import notes from "../data/notes.json";
import { v4 as uuidv4 } from "uuid";

type ArrProps = {
  id: string;
  title: string;
  description: string;
  createDate: string;
};

type Props = {
  id: string;
  title: string;
  description: string;
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

  function createNote(description: string, title: string) {
    const newNote = {
      id: uuidv4(),
      title,
      description,
      createDate: new Date().toISOString(),
    };

    setNotesData((oldNotes) => {
      // Check if oldNotes is defined
      if (oldNotes !== undefined) {
        // oldNotes is an array, you can safely use array methods or spread syntax
        const updatedNotes = [...oldNotes, newNote];
        // Your code using updatedNotes
        return updatedNotes;
      } else {
        // oldNotes is undefined, initialize a new array with the newNote
        return [newNote];
      }
    });
  }

  function updateNote(id: string, title: string, description: string) {
    setNotesData(function (oriState: any) {
      return oriState.map(function (rec: Props) {
        return rec.id != id
          ? rec
          : {
              ...rec,
              title: title ? title : rec.title,
              description: description ? description : rec.description,
            };
      });
    });
  }

  function deleteNote(id: string) {
    setNotesData((oriState) => {
      oriState = oriState ?? [];
      return oriState.filter((rec) => {
        return rec.id != id;
      });
    });
  }

  return { notesData, notesDataError, createNote, updateNote, deleteNote };
}

export default useNotes;