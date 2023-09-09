import { TaskList } from './tasks/TaskList'
import { NotificationProvider } from './notification/NotificationContext'

import { Header } from './header/Header'
import { TasksProvider } from './tasks/TasksContext'

import './style.css'

export function App() {
  return (
    <NotificationProvider>
      <TasksProvider>
        <Header />
        <TaskList />
      </TasksProvider>
    </NotificationProvider>
  )
}