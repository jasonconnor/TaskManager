import { TaskForm } from './TaskForm'
import { TaskList } from './TaskList'
import { Notification } from '../notification/Notification'
import { useNotification } from '../notification/NotificationContext'

export function Tasks() {
  const { showNotification } = useNotification()
  return (
    <div className='taskWrapper'>

      {showNotification && <Notification />}

      {/* Task List */}
      <TaskList />
    </div>
  )
}