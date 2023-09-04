import { getAllTasks, getTaskById, createTask, deleteTask } from './task.service.js'

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

export async function findOne(request, response) {
  try {
    const { id } = request.params

    const task = await getTaskById(id)

    return response.status(200).json(task)
  }

  catch (error) {
    console.error(error)

    return response.status(500).json({error: 'Something went wrong!'})
  }
}

export async function create(request, response) {
  try {
    const { title, description, dueBy } = request.body

    const task = await createTask(title, description, dueBy)

    return response.status(201).json(task)
  }
  
  catch (error) {
    console.error(error)

    return response.status(500).json({error: 'Something went wrong!'})
  }
}

export async function remove(request, response) {
  try {
    const { id } = request.params

    await deleteTask(id)

    return response.status(200).json({message: `Task ${id} deleted!`})
  }
  
  catch (error) {
    console.error(error)

    return response.status(500).json({error: 'Something went wrong!'})
  }
}