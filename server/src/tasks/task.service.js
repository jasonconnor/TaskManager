import { TaskModel } from './task.model.js'

export async function getAllTasks() {
  const tasks = await TaskModel.find()
  
  return tasks
}

export async function createTask(title, description, dueBy) {
  const task = new TaskModel({title, description, dueBy})
  const result = await task.save()

  return result
}