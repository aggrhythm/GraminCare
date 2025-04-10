import './App.css'
import SideBar from './components/sideBar'
import Home from './pages/home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className='flex justify-between w-full '>
      <SideBar/>
        <Routes >
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App