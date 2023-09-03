import { faPencil, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

import './style.css'

export function TaskList() {
  const [tasks, setTasks] = useState([])

  async function getTasks() {
    const response = await fetch('http://localhost:4000/tasks')
    const data = await response.json()

    console.log(data)
    setTasks(data)
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div className='taskListWrapper'>
      <h2>Tasks</h2>

      <div className='taskListContainer'>
        {tasks.map(task => (
          <div key={task.id} className='taskListItem'>
            <div className='taskItemDetails'>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>{task.dueBy}</p>
            </div>

            <div className='taskItemOptions'>
              <FontAwesomeIcon icon={faPencil} className='taskItemButton' />
              <FontAwesomeIcon icon={faX} className='taskItemButton deleteButton' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}