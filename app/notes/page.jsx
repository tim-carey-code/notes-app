import Link from 'next/link'

const Notes = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Notes</h1>
      <Link className='link' href='/'>Go back home</Link>
    </>
  )
}

export default Notes