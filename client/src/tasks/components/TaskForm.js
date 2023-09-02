import { useRef } from 'react'

export function TaskForm({ setNotificationMessage }) {
  const titleRef = useRef()
  const descriptionRef = useRef()
  const dueByRef = useRef()

  async function createTask(task) {
    const response = await fetch('http://localhost:4000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await response.json()

    return data
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const title = titleRef.current.value
    const description = descriptionRef.current.value
    const dueBy = dueByRef.current.value

    const task = {title, description, dueBy}

    try {
      const result = await createTask(task)

      console.log(result)
      setNotificationMessage('Task created successfully!')
    }

    catch (error) {
      console.error(error)
      setNotificationMessage('Something went wrong!')
    }

    
  }

  return (
    <div>
      <h2>Create Task</h2>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input ref={titleRef} type="text" />

        <label>Description</label>
        <textarea ref={descriptionRef}></textarea>

        <label>Due By</label>
        <input type="datetime-local" ref={dueByRef} />

        <button>Create</button>
      </form>
    </div>
  )
}