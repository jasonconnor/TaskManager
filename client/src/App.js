import { Tasks } from './tasks/Tasks'
import { NotificationProvider } from './notification/NotificationContext'

import './style.css'

import { Header } from './header/Header'
import { TasksProvider } from './tasks/TasksContext'

export function App() {
  return (
    <NotificationProvider>
      <TasksProvider>
        <Header />
        <Tasks />
      </TasksProvider>
    </NotificationProvider>
  )
}