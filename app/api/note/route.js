import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const GET = async (req, res) => {
  try {

    const notes = await prisma.note.findMany()
    return new Response(JSON.stringify(notes), {
      status: 200
    })
  } catch (error) {
    return new Response("Failed to fetch all notes", {
      status: 500
    })
  }
}