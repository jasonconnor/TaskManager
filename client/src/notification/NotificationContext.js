import { useState, useContext, createContext } from 'react'

export const NotificationContext = createContext()

export function useNotification() {
  return useContext(NotificationContext)
}

export function NotificationProvider({ children }) {
  const [notificationType, setNotificationType] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')

  function closeNotification() {
    setShowNotification(false)
  }

  function setErrorNotification(message) {
    setNotificationType('error')
    setNotificationMessage(message)
    setShowNotification(true)
  }

  function setSuccessNotification(message) {
    setNotificationType('success')
    setNotificationMessage(message)
    setShowNotification(true)
  }

  return (
    <NotificationContext.Provider value={{
      notificationType, setNotificationType,
      showNotification, setShowNotification,
      notificationMessage, setNotificationMessage,
      setErrorNotification, setSuccessNotification,
      closeNotification
    }}>
      {children}
    </NotificationContext.Provider>
  )
}