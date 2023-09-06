import { useNotification } from './NotificationContext'

import './style.css'

export function Notification() {
  const { closeNotification, notificationMessage, notificationType } = useNotification()

  return (
    <div className={'notification notification-' + notificationType}>
      <span className='notificationMessage'>{ notificationMessage }</span>

      <button onClick={closeNotification}>close</button>
    </div>
  )
}