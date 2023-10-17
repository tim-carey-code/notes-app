import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const GET = async (req, { params }) => {
  // console.log(typeof params.id)
  try {
    const note = await prisma.note.findUnique({
      where: {
        id: Number(params.id)
      }
    })

    return new Response(JSON.stringify(note), {
      status: 200
    })
  } catch (error) {
    return new Response("Failed to fetch note", {
      status: 500
    })
  }
}


export const PATCH = async (req, { params }) => {
  const { userId, text, title, category } = await req.json()

  try {

    const existingNote = await prisma.note.update({
      where: {
        id: Number(params.id)
      },
      data: {
        text: text,
        title: title,
        category: category,
        updatedAt: new Date()
      }
    })

    if (!existingNote) return new Response("Note not found", { status: 404 })

    return new Response(JSON.stringify(existingNote), { status: 200 })
  } catch (error) {
    return new Response(`Failed to update note. ${error}`, {
      status: 500
    })
  }
}


export const DELETE = async (req, { params }) => {

  try {
    await prisma.note.delete({
      where: {
        id: Number(params.id)
      }
    })
    return new Response("Note deleted successfully", { status: 200 })
  } catch (error) {
    return new Response("Failed to delete note", {
      status: 500
    })
  }
}