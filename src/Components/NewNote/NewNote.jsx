import { useState } from 'react'
import { getFirestore } from '../../Services/Firebase'

export default function NewNote () {

    const [noteTittle, setNoteTittle] = useState('')
    const [noteContent, setNoteContent] = useState('')

    const onCreate = () => {
        const db = getFirestore()
        const notes = db.collection('notes')
    
        notes.add({noteTittle: noteTittle, noteContent: noteContent})
    }

    return (
        <div className='newNote-container'>
            <p>Write a new note!</p>
            <article className='newNote'>
                <input type="text" placeholder='Note tittle' onChange={e => setNoteTittle(e.target.value)} />
                <textarea rows = "5" placeholder='Note content' onChange={e => setNoteContent(e.target.value)} />
            </article>
            <button className='btn-primary' onClick={() => onCreate()} >Submit</button>
        </div>
    )
}