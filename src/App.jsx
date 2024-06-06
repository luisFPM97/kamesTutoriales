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
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
        <Navbar/>
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
