import { useState, useContext, createContext, useEffect, useCallback } from 'react'

import { getTasks } from './taskServices'
import { useNotification } from '../notification/NotificationContext'

export const TasksContext = createContext()

export function useTasks() {
  return useContext(TasksContext)
}

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([])

  const { setErrorNotification } = useNotification()

  const loadTasks = useCallback(async () => {
    try {
      const tasks = await getTasks()

      setTasks(tasks)
    }

    catch (error) {
      console.error(error)

      setErrorNotification('Error loading tasks')
    }
  }, [setErrorNotification])

  useEffect(() => {
    loadTasks()
  }, [loadTasks])

  return (
    <TasksContext.Provider value={{tasks, loadTasks}}>
      {children}
    </TasksContext.Provider>
  )
}