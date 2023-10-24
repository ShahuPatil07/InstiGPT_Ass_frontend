import React ,{useState}from "react";

import Header from "./Header.jsx";
import Footer  from "./Footer.jsx";
import Note from "./Note.jsx";
import storednotes from "./notes.js";
import CreateArea from "./Add_note.jsx";



function App() {
  
  
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return <div>
    <Header/> 
    <CreateArea onAdd= {addNote}/>
    {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            
          />
        );
      })}
    
    
  <Footer/>
  </div>
}
export default App;