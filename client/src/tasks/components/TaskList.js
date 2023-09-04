import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

import { getTasks, deleteTask } from '../taskServices'

import './style.css'

export function TaskList() {
  const [tasks, setTasks] = useState([])

  // ToDo: Implement Error Notification on Catch
  async function loadTasks() {
    try {
      const tasks = await getTasks()

      setTasks(tasks)
    }

    catch (error) {
      console.error(error)
    }
  }

  // ToDo: Implement Success Notification on Try
  // ToDo: Implement Error Notification on Catch
  async function handleDeleteButtonClick(taskId) {
    try {
      await deleteTask(taskId)
      await loadTasks()
    }

    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <div className='taskListWrapper'>
      <h2>Tasks</h2>

      <div className='taskListContainer'>
        {tasks.map(task => (
          <div key={task._id} className='taskListItem'>
            <div className='taskItemDetails'>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>{task.dueBy}</p>
            </div>

            <div className='taskItemOptions'>
              <FontAwesomeIcon icon={faPencil} className='taskItemButton' />
              
              <FontAwesomeIcon 
                icon={faTrash}
                className='taskItemButton deleteButton'
                onClick={() => handleDeleteButtonClick(task._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}