import { TaskForm } from './TaskForm'
import { TaskList } from './TaskList'
import { Notification } from '../notification/Notification'
import { useNotification } from '../notification/NotificationContext'

export function Tasks() {
  const { showNotification } = useNotification()
  return (
    <div>
      <h1>To-Do App</h1>

      {showNotification && <Notification />}

      {/* Task Form */}
      <TaskForm />

      {/* Task List */}
      <TaskList />
    </div>
  )
}