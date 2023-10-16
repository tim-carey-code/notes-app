import Link from 'next/link'

const NoteList = ({ note, handleDelete, handleEdit }) => {
  return (
    <section>
      <Link className='link' href={`/notes/${note._id}`}>
        <p key={note._id} className='mt-4'>{note.title}</p>
      </Link>
    </section>
  )
}

export default NoteList