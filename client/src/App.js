import { useState, useEffect } from 'react'

import { TaskForm } from './tasks/components/TaskForm'
import { TaskList } from './tasks/components/TaskList'

export function App() {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')

  function hideNotification() {
    setShowNotification(false)
  }

  useEffect(() => {
    notificationMessage && setShowNotification(true)
  }, [notificationMessage])

  return (
    <div>
      <h1>To-Do App</h1>

      {/* Notifications */}
      {
        showNotification &&
        <div>
          <p>
            {notificationMessage}
          </p>
          <button onClick={hideNotification}>X</button>
        </div>
      }

      <TaskForm setNotificationMessage={setNotificationMessage} />
      <TaskList />
    </div>
  )
}