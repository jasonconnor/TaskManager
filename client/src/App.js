import { Tasks } from './tasks/Tasks'
import { NotificationProvider } from './notification/NotificationContext'

import './style.css'

import { Header } from './header/Header'

export function App() {
  return (
    <NotificationProvider>
      <Header />
      <Tasks />
    </NotificationProvider>
  )
}