import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Navbar from './components/navBar/Navbar'
import Login from './components/login/Login'

function App() {
  const [showRegister, setShowRegister] = useState(false)
  console.log(showRegister)
  return (
    <div className='app'>
        <Navbar
          setShowRegister={setShowRegister}
        />
        <Register
          setShowRegister={setShowRegister}
          showRegister={showRegister}
        />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <footer>

        </footer>
    </div>
  )
}

export default App
