import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export function Modal({ children, closeModal }) {
  return (
    <div className='modalOverlay'>
      <div className='modalContainer'>
        <FontAwesomeIcon icon={faClose} onClick={closeModal} className='closeModalButton' />
        { children }
      </div>
    </div>
  )
}