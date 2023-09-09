import { useState, useContext, createContext } from 'react'

export const ModalContext = createContext()

export function useModal() {
  return useContext(ModalContext)
}

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState()

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <ModalContext.Provider value={{showModal, openModal, closeModal}}>
      {children}
    </ModalContext.Provider>
  )
}