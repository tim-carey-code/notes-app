import { connectToDB } from "utils/database"
import Note from 'models/note'

export const GET = async (req, { params }) => {
  try {
    await connectToDB()
    params.id
    const note = await Note.findById(params.id).populate('creator')

    return new Response(JSON.stringify(note), {
      status: 200
    })
  } catch (error) {
    return new Response("Failed to fetch all prompts", {
      status: 500
    })
  }
}


export const PATCH = async (req, { params }) => {
  const { userId, text, title, category, date } = await req.json()


  try {
    await connectToDB()

    const existingNote = await Note.findById(params.id)

    if (!existingNote) return new Response("Note not found", { status: 404 })

    existingNote.title = title
    existingNote.text = text
    existingNote.category = category
    existingNote.date = date
    await existingNote.save()
    return new Response(JSON.stringify(existingNote), { status: 200 })
  } catch (error) {
    return new Response("Failed to update prompt", {
      status: 500
    })
  }
}


export const DELETE = async (req, { params }) => {

  try {
    await connectToDB()

    await Note.findByIdAndRemove(params.id)

    return new Response("Note deleted successfully", { status: 200 })
  } catch (error) {
    return new Response("Failed to delete note", {
      status: 500
    })
  }
}