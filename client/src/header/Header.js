import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Modal } from '../modal/Modal'
import { TaskForm } from '../tasks/TaskForm'

import './style.css'

export function Header() {
  const [showModal, setShowModal] = useState(false)

  return (
    <header className='headerContainer'>
      <div className='headerWrapper'>
        <h1>TaskManager</h1>

        <FontAwesomeIcon 
          icon={faPlus} 
          className='headerButton'
          onClick={() => setShowModal(true)}  
        />
      </div>

      {showModal && createPortal(
      <Modal closeModal={() => setShowModal(false)}>
        <TaskForm />
      </Modal>,
      document.querySelector('#modal'))}
    </header>
  )
}