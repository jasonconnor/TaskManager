import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  complete: Boolean,
  dueBy: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const TaskModel = mongoose.model('Task', TaskSchema)