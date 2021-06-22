import { useState } from 'react'
import { getFirestore } from '../../Services/Firebase'
import { Icon } from '@iconify/react'
import delete20Filled from '@iconify-icons/fluent/delete-20-filled'
import bxsEdit from '@iconify-icons/bx/bxs-edit'

export default function SavedNote ({tittle, content, id}) {

    const [editingMode, setEditingMode] = useState(false)
    const [editedTittle, setEditedTittle] = useState(tittle)
    const [editedContent, setEditedContent] = useState(content)

    const onEdit = () => {
        const db = getFirestore()
        const note = db.collection('notes').doc(id)
    
        note.set({noteTittle: editedTittle, noteContent: editedContent})
        setEditingMode(false)
    }

    const onDelete = () => {
        const db = getFirestore()
        const note = db.collection('notes').doc(id)
    
        note.delete()
    }

    return (
        <div className='savedNote-container'>
            <Icon icon={delete20Filled} className='icon delete' onClick={() => onDelete()} />
            <Icon icon={bxsEdit} className='icon edit' onClick={() => setEditingMode(!editingMode)} />
            <article className='savedNote'>
                {!editingMode ? <h2>{tittle}</h2> : <input type="text" placeholder={tittle} onChange={e => setEditedTittle(e.target.value)}/>}
                {!editingMode ? <p>{content}</p> : <textarea rows = "5" placeholder={content} onChange={e => setEditedContent(e.target.value)} />}
            </article>

            {editingMode ?
                <div className='btn-container'>
                    <button className='btn-secondary' onClick={() => setEditingMode(false)}>Cancel</button>
                    <button className='btn-primary' onClick={() => onEdit()}>Save</button>
                </div>
            : null}
        </div>
    )
}