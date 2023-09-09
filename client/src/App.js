import { Header } from './header/Header'
import { TaskList } from './tasks/TaskList'
import { ModalProvider } from './modal/ModalContext'
import { TasksProvider } from './tasks/TasksContext'
import { NotificationProvider } from './notification/NotificationContext'


import './style.css'

export function App() {
  return (
    <NotificationProvider>
      <TasksProvider>
        <ModalProvider>
          <Header />
          <TaskList />
        </ModalProvider>
      </TasksProvider>
    </NotificationProvider>
  )
}