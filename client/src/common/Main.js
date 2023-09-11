import './style.css'

export function Main({ children }) {
  return (
    <main className='mainContainer'>
      <div className='mainWrapper'>
        { children }
      </div>
    </main>
  )
}