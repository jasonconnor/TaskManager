import { TaskForm } from './tasks/TaskForm'
import { TaskList } from './tasks/TaskList'

import './style.css'

export function App() {
  return (
    <NotificationProvider>
      <div>
        <h1>To-Do App</h1>

        {/* Task Form */}
        <TaskForm />

        {/* Task List */}
        <TaskList />
      </div>
    </NotificationProvider>
  )
}