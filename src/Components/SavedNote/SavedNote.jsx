import { Icon } from '@iconify/react'
import delete20Filled from '@iconify-icons/fluent/delete-20-filled'
import bxsEdit from '@iconify-icons/bx/bxs-edit'
import { getFirestore } from '../../Services/Firebase'

export default function SavedNote ({tittle, content, id}) {

    const onDelete = () => {
        const db = getFirestore()
        const note = db.collection('notes').doc(id)
    
        note.delete()
      }

    return (
        <div className='savedNote-container'>
            <Icon icon={delete20Filled} className='icon delete' onClick={() => onDelete()} />
            <Icon icon={bxsEdit} className='icon edit' />
            <article className='savedNote'>
                <h2>{tittle}</h2>
                <p>{content}</p>
            </article>
        </div>
    )
}