import { getAllTasks, createTask } from './task.service.js'

export async function find(request, response) {
  try {
    const tasks = await getAllTasks()

    return response.status(200).json(tasks)
  }
  
  catch (error) {
    console.error(error)

    return response.status(500).json({error: 'Something went wrong!'})
  }
}

export async function create(request, response) {
  try {
    const { title, description, dueDate } = request.body

    const task = await createTask(title, description)

    return response.status(201).json(task)
  }
  
  catch (error) {
    console.error(error)

    return response.status(500).json({error: 'Something went wrong!'})
  }
}