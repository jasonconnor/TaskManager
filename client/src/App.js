import { Tasks } from './tasks/Tasks'
import { NotificationProvider } from './notification/NotificationContext'

import './style.css'

export function App() {
  return (
    <NotificationProvider>
      <Tasks />
    </NotificationProvider>
  )
}