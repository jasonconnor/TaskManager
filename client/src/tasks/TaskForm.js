import { useRef } from 'react'

import { useTasks } from './TasksContext'
import { createTask } from './taskServices'
import { useNotification } from '../notification/NotificationContext'

import './style.css'

export function TaskForm() {
  const titleRef = useRef()
  const descriptionRef = useRef()
  const dueByRef = useRef()

  const { loadTasks } = useTasks()
  const { setSuccessNotification, setErrorNotification } = useNotification()

  async function handleSubmit(event) {
    const title = titleRef.current.value
    const description = descriptionRef.current.value
    const dueBy = dueByRef.current.value

    const task = {title, description, dueBy}

    event.preventDefault()

    try {
      await createTask(task)
      await loadTasks()

      setSuccessNotification('Task created successfully.')
    }

    catch (error) {
      console.error(error)

      setErrorNotification('Failed to create new task.')
    }
  }

  return (
    <div className='taskFormWrapper'>
      <h2>Create Task</h2>

      <form 
        onSubmit={handleSubmit} 
        className='taskForm'
      >
        <div className='taskFormGroup'>
          <label className='taskFormLabel'>Title:</label>
          <input ref={titleRef} type='text' />
        </div>

        <div className='taskFormGroup'>
          <label className='taskFormLabel'>Description:</label>
          <textarea ref={descriptionRef}></textarea>
        </div>

        <div className='taskFormGroup'>
          <label className='taskFormLabel'>Due By:</label>
          <input type='datetime-local' ref={dueByRef} />
        </div>

        <button>Create</button>
      </form>
    </div>
  )
}