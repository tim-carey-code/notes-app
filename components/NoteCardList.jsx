import Card from './Card'
import { useSession } from 'next-auth/react'

const NoteCardList = ({ note, handleEdit, handleDelete }) => {
  const { data: session } = useSession()

  return (
    <>
      <div className='flex gap-4'>
        <Card
          note={note}
          handleDelete={handleDelete && handleDelete(note)}
          handleEdit={handleEdit && handleEdit(note)}
        />
      </div>
    </>
  )
}

export default NoteCardList