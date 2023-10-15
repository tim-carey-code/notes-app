'use client'
import NoteList from './NoteList'
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

const Notes = ({ name, data, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.length === 0) {
      setLoading(false);
    }
  }, [data]);

  return (
    <section>
      {!loading ? (
        data.length === 0 ? (
          <p>No notes found. Start creating some notes!</p>
        ) : (
          <div>
            {data.map((note) => {
              const isUserNote = session?.user.id === note.creator._id;
              return isUserNote ? (
                <NoteList
                  key={note._id}
                  note={note}
                  handleEdit={handleEdit && handleEdit(note)}
                  handleDelete={handleDelete && handleDelete(note)}
                />
              ) : null;
            })}
          </div>
        )
      ) : (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </section>
  );
}

export default Notes;

