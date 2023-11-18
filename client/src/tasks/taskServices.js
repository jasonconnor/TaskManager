export async function getTasks(status) {
  const response = await fetch(`http://localhost:4000/tasks?complete=${status}`)
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

export async function completeTask(id) {
  const response = await fetch(`http://localhost:4000/tasks/${id}/complete`, {
    method: 'PUT',
  })
  const data = await response.json()

  return data
}