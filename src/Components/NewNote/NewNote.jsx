import { useState, useRef } from 'react'
import { getFirestore } from '../../Services/Firebase'

export default function NewNote () {

    const [noteTittle, setNoteTittle] = useState('')
    const [noteContent, setNoteContent] = useState('')

    const titleRef = useRef()
    const contentRef = useRef()

    const onSubmit = () => {
        const db = getFirestore()
        const notes = db.collection('notes')
    
        notes.add({noteTittle: noteTittle, noteContent: noteContent})
        titleRef.current.value = ''
        contentRef.current.value = ''
    }

    return (
        <div className='newNote-container'>
            <p>Write a new note!</p>
            <article className='newNote'>
                <input type="text" placeholder='Note tittle' ref={titleRef} onChange={e => setNoteTittle(e.target.value)} />
                <textarea rows = "5" placeholder='Note content' ref={contentRef} onChange={e => setNoteContent(e.target.value)} />
            </article>

            <button className='btn-primary' onClick={() => onSubmit()} >Submit</button>
        </div>
    )
}