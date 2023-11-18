import {
  faTrash,
  faSquareCheck,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTasks } from '../tasks/TasksContext'
import { Notification } from '../notification/Notification'
import { useNotification } from '../notification/NotificationContext'
import { deleteTask, completeTask } from './taskServices'

import './style.css'

export function TaskList() {
  const {
    showNotification,
    setErrorNotification,
    setSuccessNotification
  } = useNotification()

  const { 
    loadTasks,
    showComplete, 
    completedTasks, 
    incompleteTasks, 
    toggleShowComplete,
  } = useTasks()

  const tasks = showComplete ? completedTasks : incompleteTasks

  function formatDate(date) {
    const dateObj = new Date(date)

    return `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()} - ${dateObj.getHours() % 12}:${dateObj.getMinutes()}`
  }

  async function handleCompleteButtonClick(taskId) {
    try {
      await completeTask(taskId)
      await loadTasks()

      setSuccessNotification('Task completed!')
    }
    
    catch (error) {
      console.error(error)

      setErrorNotification('Error completing task!')
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

  return (
    <div className='taskList'>

      { showNotification && <Notification />}

      <div className='taskSwitchContainer'>
        <span>Incomplete Tasks</span>

        <label className='taskSwitch' htmlFor='showComplete'>
          <input type='checkbox' id='showComplete' name='showComplete' onChange={() => toggleShowComplete()}/>
          <span className='taskSwitchSlider'></span>
        </label>

        <span>Complete Tasks</span>
      </div>

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
            <FontAwesomeIcon
              icon={faSquareCheck}
              onClick={() => handleCompleteButtonClick(task._id)}
              className='taskItemButton button-complete'
            />

            <FontAwesomeIcon
              icon={faPenToSquare}
              className='taskItemButton button-edit'
            />

            <FontAwesomeIcon
              icon={faTrash}
              className='taskItemButton button-delete'
              onClick={() => handleDeleteButtonClick(task._id)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}