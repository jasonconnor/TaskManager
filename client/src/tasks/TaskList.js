import { useEffect, useState } from 'react'

import { useNotification } from '../notification/NotificationContext'
import { getTasks, deleteTask } from './taskServices'

import './style.css'

export function TaskList() {
  const [tasks, setTasks] = useState([])

  const { setErrorNotification, setSuccessNotification } = useNotification()

  async function loadTasks() {
    try {
      const tasks = await getTasks()

      setTasks(tasks)
    }

    catch (error) {
      console.error(error)

      setErrorNotification('Error loading tasks')
    }
  }

  async function handleDeleteButtonClick(taskId) {
    try {
      await deleteTask(taskId)
      await loadTasks()

      setSuccessNotification('Task deleted!')
    }

    catch (error) {
      console.error(error)

      setErrorNotification('Error deleting task!')
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <div className='taskList'>
      {tasks.map((task) => (
        <div key={task._id} className='taskItem'>
          <div className='taskItemHeader'>
            <h2 className='taskItemTitle'>{task.title}</h2>
          </div>

          <div className='taskItemContent'>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
          </div>

          <div className='taskItemFooter'>
            <button className='taskItemButton button-complete'>complete</button>
            <button className='taskItemButton button-edit'>edit</button>
            <button
              className='taskItemButton button-delete'
              onClick={() => handleDeleteButtonClick(task._id)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}