'use client'
import { useSession } from 'next-auth/react'
import truncateText from 'utils/truncate_text'

const Card = ({ note }) => {
  const { data: session } = useSession()


  return (
    <div className="card my-10 w-96 bg-white border-black border-2">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{note.title}</h2>
        <p>{truncateText(note.text, 20)}...</p>
        <div className="card-actions justify-end">
          {note.creator._id === session?.user.id ?
            (
              <>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-ghost">Delete</button>
              </>
            ) : (<></>)
          }
        </div>
      </div>
    </div>
  )
}

export default Card