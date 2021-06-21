
export default function NewNote () {
    return (
        <div className='newNote-container'>
            <article className='newNote'>
                <input type="text" placeholder='Note tittle' />
                <textarea rows = "5" cols = "60" placeholder='Note content' />
                <button className='btn-primary'>Submit</button>
            </article>
        </div>
    )
}