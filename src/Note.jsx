import React from "react";
function Note(props){
    const [ismouseover, setmouseover]= React.useState(false);
  function onhover(){
  
    setmouseover(true);
  }
  function handleclick() {
    props.onDelete(props.id);
  }
  function onmouseout(){
    setmouseover(false);
  }
    return <div onMouseOver={onhover} onMouseOut={onmouseout} style={{backgroundColor: ismouseover? 'rgb(23, 2, 71)': 'white', color: ismouseover? 'white': 'rgb(23, 2, 71)'}} className= "note">
        <h1 onMouseOver={onhover} onMouseOut={onmouseout} style={{backgroundColor: ismouseover? 'rgb(23, 2, 71)': 'white', color: ismouseover? 'white': 'rgb(23, 2, 71)'}}>{props.title}</h1>
        <p onMouseOver={onhover} onMouseOut={onmouseout} style={{backgroundColor: ismouseover? 'rgb(23, 2, 71)': 'white', color: ismouseover? 'white': 'rgb(23, 2, 71)'}}>{props.content}</p>
        <button onClick={handleclick}  onMouseOver={onhover} onMouseOut={onmouseout} style={{backgroundColor: ismouseover? 'rgb(23, 2, 71)': 'white', color: ismouseover? 'white': 'rgb(23, 2, 71)'}}>Delete</button>
        </div>
}
export default Note;
