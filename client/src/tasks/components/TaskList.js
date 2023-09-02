import { useEffect, useState } from 'react'

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
    <div>
      <h2>Tasks</h2>

      <div>
        {tasks.map(task => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.dueBy}</p>
          </div>
        ))}
      </div>
    </div>
  )
}