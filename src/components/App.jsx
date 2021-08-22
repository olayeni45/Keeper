import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateArea from './CreateArea'

const App = () => {

    const [note, setNote] = useState([]);

    const addNote = (newNote) => {
        setNote((prevNotes) => {
            return [...prevNotes, newNote]
        })
    }

    const deleteNote = (id) =>{
        setNote((notes)=>{
            return notes.filter((element, index)=>{
                return index !== id;
            })
        })
    }

    return (

        <div>
            <Header />
            <CreateArea
                onAdd={addNote}
            />

            {note.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDelete = {deleteNote}
                    />
                )
            })}

            <Footer />
        </div>

    )

}

export default App;