import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useNotification } from './NotificationContext'

import './style.css'

export function Notification() {
  const { closeNotification, notificationMessage, notificationType } = useNotification()

  return (
    <div className={'notification notification-' + notificationType}>
      <span className='notificationMessage'>{ notificationMessage }</span>

      <FontAwesomeIcon
        icon={faTimes}
        onClick={closeNotification}
        className='closeNotification'
      />
    </div>
  )
}