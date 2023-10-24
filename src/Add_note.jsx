import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  const [ismouseover, setmouseover]= React.useState(false);
  function onhover(){
  
    setmouseover(true);
  }
  function onmouseout(){
    setmouseover(false);
  }

  return (
    <div > 
      <form onMouseOver={onhover} onMouseOut={onmouseout} style={{backgroundColor: ismouseover? 'rgb(23, 2, 71)': 'white', color: ismouseover? 'white': 'rgb(23, 2, 71)'}} > 
        <input onMouseOver={onhover} onMouseOut={onmouseout} style={{backgroundColor: ismouseover? 'rgb(23, 2, 71)': 'white', color: ismouseover? 'white': 'rgb(23, 2, 71)'}}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea onMouseOver={onhover} onMouseOut={onmouseout} style={{backgroundColor: ismouseover? 'rgb(23, 2, 71)': 'white', color: ismouseover? 'white': 'rgb(23, 2, 71)'}}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onMouseOver={onhover} onMouseOut={onmouseout} style={{backgroundColor: ismouseover? 'white': 'rgb(23, 2, 71)', color: ismouseover? 'rgb(23, 2, 71)': 'white'}} onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
