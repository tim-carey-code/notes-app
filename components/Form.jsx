import Link from 'next/link'

const Form = ({ type, note, setNote, submitting, handleSubmit }) => {
  return (
    <section className='w-ful p-10 max-w-full flex-start flex-col'>
      <h1 className='text-left'>
        <span className='text-3xl'>{type} Note</span>
      </h1>
      <p className='text-left max-w-md'>
        {type} and share notes with anyone around the world!
      </p>
      <form onSubmit={handleSubmit}>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>
              Title
            </span>
          </label>
          <input
            type='text'
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            placeholder='Why NextJS is so fun to use'
            required
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Note</span>
          </label>
          <textarea
            value={note.text}
            onChange={(e) => setNote({ ...note, text: e.target.value })}
            placeholder='Today while using NextJS I learned...'
            required
            className='textarea textarea-bordered'
          />
        </div>
        <div className='form-control mb-4 w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>
              Category
            </span>
          </label>
          <input
            type='text'
            value={note.category}
            onChange={(e) => setNote({ ...note, category: e.target.value })}
            placeholder='Web Development'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <button className='btn btn-primary mx-6' type="submit" disabled={submitting}>
            {submitting ? `${type}...` : type}
          </button>
          <Link href='/' className='btn btn-secondary'>
            Cancel
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Form