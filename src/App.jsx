import './layout.scss'
import { Navbar } from './components'
import { HomePage } from './routes'

function App() {
  return (
    <div className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <HomePage />
      </div>
    </div>
  )
}

export default App
