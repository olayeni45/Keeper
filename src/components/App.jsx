import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import noteCollection from '../notes';

const App = () => {

    return (

        <div>
            <Header />

            {noteCollection.map(note =>
            (
                <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
            )
            )}
            <Footer />
        </div>

    )

}

export default App;