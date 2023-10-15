import { connectToDB } from "utils/database"
import Note from 'models/note'

export const POST = async (req, res) => {
  const { userId, text, title, category, date } = await req.json()


  try {
    await connectToDB()
    const newNote = new Note({ creator: userId, text, title, category, date })

    await newNote.save()
    return new Response(JSON.stringify(newNote), {
      status: 201
    })
  } catch (error) {
    return new Response("Failed to create a new note", { status: 500 })
  }
}