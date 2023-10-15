'use client'
import Link from 'next/link'
import Notes from 'components/Notes'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  const [providers, setProviders] = useState()
  const [notes, setNotes] = useState([])

  const setUpProviders = async () => {
    const res = await getProviders()
    setProviders(res)
  }

  const fetchNotes = async () => {
    const res = await fetch('/api/note')
    const data = await res.json()
    const filteredUserNotes = data.filter((note) => session?.user.id === note.creator?._id)
    setNotes(filteredUserNotes)
  }

  const handleDelete = () => {

  }

  const handleEdit = () => {

  }

  useEffect(() => {
    setUpProviders()
    if (session?.user.id) fetchNotes()
  }, [session?.user.id])

  return (
    <section className='p-10'>
      {session?.user ?
        (
          <>
            <h1 className='text-3xl text-center'>{session?.user.email}'s Notes</h1>
            <Link href="/create-note" className="btn btn-primary mb-4">
              New Note
            </Link>
            <Notes
              name={session?.user.email}
              data={notes}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <div>
                  <a
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="link"
                  >
                    Sign In
                  </a>
                  <span className='ml-1'>to start creating notes!</span>
                </div>

              ))
            }
          </>
        )
      }

    </section>
  )
}
