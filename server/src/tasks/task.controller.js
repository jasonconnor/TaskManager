import { getAllTasks } from './task.service.js'

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