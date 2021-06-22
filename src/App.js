import { useState, useEffect } from 'react'
import './App.scss'
import NewNote from './Components/NewNote/NewNote'
import SavedNote from './Components/SavedNote/SavedNote'
import { getFirestore } from './Services/Firebase'

export default function App() {

  const [savedNotes, setSavedNotes ] = useState([])

  const showSavedNotes = () => {
    const db = getFirestore()
    const notesCollection = db.collection('notes')

    return notesCollection.onSnapshot(snapshot => {
      const notesData = []
      snapshot.forEach(note => notesData.push({ id: note.id, ...note.data() }))
      setSavedNotes(notesData)
    })
  }

  useEffect(() => showSavedNotes(), [])

  return (
    <div className='App'>
      <header><h1>The notes app</h1></header>

      <NewNote />
      {savedNotes.map(note => <SavedNote key={note.id} tittle={note.noteTittle} content={note.noteContent} id={note.id} />)}
      
    </div>
  )
}