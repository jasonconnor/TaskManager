import { useNotification } from './NotificationContext'

import './style.css'

export function Notification() {
  const { closeNotification, notificationMessage, notificationType } = useNotification()

  return (
    <div className={'notification notification-' + notificationType}>
      { notificationMessage }

      <button onClick={closeNotification}>close</button>
    </div>
  )
}