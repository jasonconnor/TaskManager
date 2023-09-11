import { Main } from './common/Main'
import { Header } from './common/Header'
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
          <Main>
            <TaskList />
          </Main>

        </ModalProvider>
      </TasksProvider>
    </NotificationProvider>
  )
}