"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

const MyNote = ({ params }) => {
  const [note, setNote] = useState([]);
  const router = useRouter()

  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch(`/api/note/${params?.id}`);
      const data = await response.json();
      setNote(data);
    };

    if (params?.id) fetchNote();
  }, [params.id]);

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
      <textarea className="textarea textarea-ghost" value={note.text}></textarea>
      <p>{note.category}</p>
      <p>{note.date}</p>
      <button onClick={handleDelete} className="btn btn-error">Delete</button>
    </div>
  );
};

export default MyNote;