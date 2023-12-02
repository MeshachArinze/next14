// src/components/NoteApp.tsx
"use client";
import { useState, useEffect } from "react";
import { Container, Form, ListGroup } from "react-bootstrap";

type Note = {
  id: number;
  content: string;
};

const NoteApp: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, { id: Date.now(), content: newNote }]);
      setNewNote("");
    }
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <Container className={darkMode ? "dark-mode" : ""}>
      <h1 className="mt-3 mb-3">Note App</h1>

      <Form>
        <Form.Group controlId="formNote">
          <Form.Label>Note:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your note..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="switch"
            id="dark-mode-switch"
            label="Dark Mode"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </Form.Group>
        <button type="button" className="btn btn-primary" onClick={addNote}>
          Add Note
        </button>
      </Form>

      <ListGroup className="mt-4">
        {notes.map((note) => (
          <ListGroup.Item
            key={note.id}
            className="d-flex justify-content-between align-items-center"
          >
            {note.content}
            <button
              className="btn btn-danger"
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default NoteApp;
