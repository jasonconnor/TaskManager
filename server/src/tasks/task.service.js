import { TaskModel } from './task.model.js'

export async function getAllTasks() {
  const tasks = await TaskModel.find()
  
  return tasks
}