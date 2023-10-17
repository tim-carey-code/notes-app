'use client'
import Form from 'components/Form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const router = useRouter()
  const { data: session } = useSession()
  const [note, setNote] = useState({
    text: '',
    title: '',
    category: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const createNote = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch('/api/note/new', {
        method: 'POST',
        body: JSON.stringify({
          text: note.text,
          userId: session?.user.id,
          title: note.title,
          category: note.category
        })
      })

      if (res.ok) {
        router.push('/')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }

  }

  // const user = session?.user
  // const notify = () => toast.error("Please sign in to create notes.", {
  //   toastId: "error",
  //   position: "top-center"
  // })

  // if (!user) {
  //   notify()
  //   router.push('/')
  //   return null
  // }

  return (
    <section>
      <Form
        type="Create"
        note={note}
        setNote={setNote}
        submitting={submitting}
        handleSubmit={createNote}
      />
    </section>
  )
}