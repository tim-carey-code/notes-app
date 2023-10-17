import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const POST = async (req, res) => {
  const { userId, text, title, category, date } = await req.json()

  try {
    // const newNote = new Note({ creator: userId, text, title, category, date })
    const newNote = await prisma.note.create({
      data: {
        userId: Number(userId),
        text: text,
        title: title,
        category: category,
      },
    })

    return new Response(JSON.stringify(newNote), {
      status: 201
    })
  } catch (error) {
    return new Response(`Failed to create a new note ${error}`, { status: 500 })
  }
}