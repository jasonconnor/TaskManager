import { TaskModel } from './task.model.js'

// Depreciated
export async function getAllTasks() {
  const tasks = await TaskModel.find().sort({dueBy: 1})
  
  return tasks
}

export async function getTaskById(id) {
  const task = await TaskModel.findById(id)

  return task
}

export async function getCompletedTasks() {
  const tasks = await TaskModel.find({complete: true})

  return tasks
}

export async function getIncompleteTasks() {
  const tasks = await TaskModel.find({complete: false})

  return tasks
}

export async function createTask(title, description, dueBy) {
  const task = new TaskModel({title, description, dueBy})
  const result = await task.save()

  return result
}

export async function completeTask(id) {
  const task = await TaskModel.findByIdAndUpdate(id, {complete: true}, {new: true})

  return task
}

export async function deleteTask(id) {
  const task = await TaskModel.findByIdAndDelete(id)

  return task
}