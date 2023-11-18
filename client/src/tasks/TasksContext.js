import { 
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext
} from 'react'

import { getTasks } from './taskServices'
import { useNotification } from '../notification/NotificationContext'

export const TasksContext = createContext()

export function useTasks() {
  return useContext(TasksContext)
}

export function TasksProvider({ children }) {
  const [showComplete, setShowComplete] = useState(false)
  const [completedTasks, setCompletedTasks] = useState([])
  const [incompleteTasks, setIncompleteTasks] = useState([])

  const { setErrorNotification } = useNotification()

  const toggleShowComplete = () => setShowComplete(!showComplete)

  const loadTasks = useCallback(async () => {
    try {
      const tasks = await getTasks()

      const completedTaskData = tasks.filter(task => task.complete)
      const incompleteTaskData = tasks.filter(task => !task.complete)

      console.log(completedTaskData)
      console.log(incompleteTaskData)

      setCompletedTasks(completedTaskData)
      setIncompleteTasks(incompleteTaskData)
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
    <TasksContext.Provider value={{
      loadTasks,
      showComplete,
      completedTasks,
      incompleteTasks,
      toggleShowComplete
    }}>
      {children}
    </TasksContext.Provider>
  )
}