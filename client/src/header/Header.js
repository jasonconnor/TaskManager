import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

export function Header() {
  return (
    <header className='headerContainer'>
      <div className='headerWrapper'>
        <h1>TaskManager</h1>

        <FontAwesomeIcon icon={faPlus} className='headerButton' />
      </div>
    </header>
  )
}