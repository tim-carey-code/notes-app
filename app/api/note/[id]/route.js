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