import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { Zoom } from '@mui/material';
import Note from "./Note";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

    const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function Expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {expand ? (
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        ) : null}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
          onClick={Expand}
        />

        <Zoom in={expand}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
