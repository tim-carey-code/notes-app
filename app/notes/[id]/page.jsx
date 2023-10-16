"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Form from 'components/Form'

const MyNote = ({ params }) => {
  const [note, setNote] = useState({
    title: '',
    category: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch(`/api/note/${params?.id}`);
      const data = await response.json();
      setNote(data);
    };

    if (params?.id) fetchNote();
  }, [params.id]);

  const editNote = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch(`/api/note/${params?.id}`, {
        method: 'PATCH',
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

  const handleDelete = async () => {
    const hasConfirmed = confirm("Are you sure you want to delete this note?")

    if (hasConfirmed) {
      try {
        await fetch(`/api/note/${note._id.toString()}`, {
          method: "DELETE"
        })
        router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  }


  return (
    <div>
      <p>{note.title}</p>
      {/* <textarea className="textarea textarea-ghost" value={note.text}></textarea> */}
      <Form
        type="Edit"
        note={note}
        setNote={setNote}
        submitting={submitting}
        handleSubmit={editNote}
      />
      <button onClick={handleDelete} className="btn btn-error">Delete</button>
    </div>
  );
};

export default MyNote;