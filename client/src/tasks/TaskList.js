import { useTasks } from '../tasks/TasksContext'
import { deleteTask } from './taskServices'
import { Notification } from '../notification/Notification'
import { useNotification } from '../notification/NotificationContext'

import './style.css'

export function TaskList() {
  const { tasks, loadTasks } = useTasks()
  const { showNotification, setErrorNotification, setSuccessNotification } = useNotification()

  function formatDate(date) {
    const dateObj = new Date(date)

    return `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()} - ${dateObj.getHours() % 12}:${dateObj.getMinutes()}`
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

  return (
    <div className='taskList'>

      { showNotification && <Notification />}

      {tasks.map((task) => (
        <div key={task._id} className='taskItem'>
          <div className='taskItemHeader'>
            <h2 className='taskItemTitle'>{task.title}</h2> 
            <span className='taskItemDueDate'>Due by: {formatDate(task.dueBy)}</span>
          </div>

          <div className='taskItemContent'>
            <p>{task.description}</p>
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