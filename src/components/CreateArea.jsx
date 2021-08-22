import React, { useState } from "react";

const CreateArea = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNote((previousNote) => {
            return {
                ...previousNote,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
    }   

    return (
        <div>
            <form>
                <input
                    onChange={handleInputChange}
                    name="title"
                    placeholder="Title"
                    value={note.title}
                />
                <textarea
                    onChange={handleInputChange}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={note.content} />
                <button
                onClick={handleSubmit}
                >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;