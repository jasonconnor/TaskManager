import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Modal } from '../modal/Modal'
import { TaskForm } from '../tasks/TaskForm'
import { useModal } from '../modal/ModalContext'

import './style.css'

export function Header() {
  const { showModal, openModal, } = useModal()

  return (
    <header className='headerContainer'>
      <div className='headerWrapper'>
        <h1>TaskManager</h1>

        <FontAwesomeIcon 
          icon={faPlus} 
          className='headerButton'
          onClick={openModal}  
        />
      </div>

      {showModal && createPortal(
        <Modal>
          <TaskForm />
        </Modal>,
        document.querySelector('#modal')
      )}
    </header>
  )
}