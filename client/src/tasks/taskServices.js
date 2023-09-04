export async function getTasks() {
  const response = await fetch('http://localhost:4000/tasks')
  const data = await response.json()

  return data
}

export async function createTask(task) {
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

export async function deleteTask(id) {
  const response = await fetch(`http://localhost:4000/tasks/${id}`, {
    method: 'DELETE',
  })
  const data = await response.json()

  return data
}