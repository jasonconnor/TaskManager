import { TaskForm } from './tasks/components/TaskForm'
import { TaskList } from './tasks/components/TaskList'

export function App() {
  return (
    <div>
      <h1>To-Do App</h1>

      <TaskForm />
      <TaskList />
    </div>
  )
}