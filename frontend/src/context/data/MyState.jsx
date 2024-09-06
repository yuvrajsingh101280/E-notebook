import toast from "react-hot-toast";
import myContext from "./MyContext";
import React, { useState } from "react";
const MyState = ({ children }) => {
  // loading state
  const [loading, setLoading] = useState(false);

  // get notes state

  const [allNotes, setAllNotes] = useState([]);

  // add  note state

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  // Get all notes function

  const getAllNotes = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://e-notebook-tler.onrender.com/api/notes/fetchallnotes",
        {
          method: "GET",
          headers: {
            "content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const notesData = await res.json();

      console.log(notesData);

      setAllNotes(notesData);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Add note function
  const addNote = async () => {
    const res = await fetch(
      "https://e-notebook-tler.onrender.com/api/notes/addnote",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      }
    );
    const noteData = await res.json();
    console.log(noteData);
    getAllNotes(); //after adding the new note we will update the data and display the updated notes

    // condition

    if (noteData.error) {
      toast.error(noteData.error);
    } else {
      toast.success(noteData.success);
    }
    setTitle("");
    setDescription("");
    setTag("");
  };

  // Delete notes function

  const deleteNote = async (id) => {
    const res = await fetch(
      `https://e-notebook-tler.onrender.com/api/notes/deletenote/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );

    const noData = await res.json();
    console.log(noData);
    getAllNotes();

    toast.success(noData.success);
  };

  return (
    <myContext.Provider
      value={{
        allNotes,
        getAllNotes,
        loading,
        title,
        setTitle,
        description,
        setDescription,
        tag,
        setTag,
        addNote,
        deleteNote,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
export default MyState;
