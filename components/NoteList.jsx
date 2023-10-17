import Link from 'next/link'

const NoteList = ({ note, handleDelete, handleEdit }) => {
  return (
    <section>
      <Link className='link' href={`/notes/${note.id}`}>
        <p key={note._id} className='mt-4'>{note.title}</p>
      </Link>
    </section>
  )
}

export default NoteList