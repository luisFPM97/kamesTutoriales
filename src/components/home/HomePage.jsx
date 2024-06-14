import React, { useEffect, useState } from 'react'
import Navbar from '../navBar/Navbar'
import Register from '../register/Register'
import Login from '../login/Login'
import Home from './Home'
import { useDispatch } from 'react-redux'
import { authenticateThunk } from '../authSlice'

const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authenticateThunk());
        
    }, [ dispatch ]);

const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div>
        <Navbar
          setShowRegister={setShowRegister}
          setShowLogin={setShowLogin}
        />
        <Register
          setShowRegister={setShowRegister}
          showRegister={showRegister}
        />
        <Login
          setShowLogin={setShowLogin}
          showLogin={showLogin}
        />
        <Home/>
    </div>
  )
}

export default HomePage