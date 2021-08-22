import React from 'react';

const Note = (props) => {

    const deleteNotes = () =>{
        props.onDelete(props.id)
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deleteNotes}>DELETE</button>
        </div>
    )
}

export default Note;