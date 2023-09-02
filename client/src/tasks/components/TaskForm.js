import { useRef } from 'react'

export function TaskForm() {
  const titleRef = useRef()
  const descriptionRef = useRef()
  const dueDateRef = useRef()

  async function createTask(task) {
    console.log(task)

    const response = await fetch('http://localhost:4000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await response.json()

    console.log(data)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const title = titleRef.current.value
    const description = descriptionRef.current.value
    const dueDate = dueDateRef.current.value

    const task = {title, description, dueDate}

    return createTask(task)
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
        <input type="date" ref={dueDateRef} />

        <button>Create</button>
      </form>
    </div>
  )
}