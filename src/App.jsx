import './App.css'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Home from './components/Home'

function App() {


  return (
    <>
      <div className='landing'>
        <Sidebar />
        <div className='landingContainer'>
          <TopBar />
          <Home />
        </div>

      </div>
    </>
  )
}

export default App
