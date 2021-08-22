import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const CreateArea = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [expanded, setExpanded] = useState(false)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNote((previousNote) => {
            return {
                ...previousNote,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
    }

    const expandDiv = () => {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">

                {expanded ? <input
                    onChange={handleInputChange}
                    name="title"
                    placeholder="Title"
                    value={note.title}
                /> : null}

                <textarea
                    onChange={handleInputChange}
                    onClick={expandDiv}
                    name="content"
                    placeholder="Take a note..."
                    rows={expanded ? "3" : "1"}
                    value={note.content} />

                <Zoom in={expanded}><Fab onClick={handleSubmit}><AddIcon /></Fab></Zoom>

            </form>
        </div>
    );
}

export default CreateArea;