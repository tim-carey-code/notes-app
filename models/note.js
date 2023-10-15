import { Schema, model, models } from 'mongoose'

const NoteSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  text: {
    type: String,
    required: [true, "Note is required!"]
  },
  title: {
    type: String,
    required: [true, "Title is required!"]
  },
  date: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String
  }
})

const Note = models.Note || model('Note', NoteSchema)

export default Note