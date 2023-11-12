import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useModal } from './ModalContext'

import './style.css'

export function Modal({ children }) {
  const { closeModal } = useModal()
  
  return (
    <div className='modalOverlay'>
      <div className='modalContainer'>
        <FontAwesomeIcon icon={faClose} onClick={closeModal} className='closeModalButton' />

        <div className='modalWrapper'>
          { children }
        </div>
      </div>
    </div>
  )
}