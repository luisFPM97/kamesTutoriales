import { useEffect, useState } from 'react'
import './App.css'
import { HashRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Navbar from './components/navBar/Navbar'
import Login from './components/login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { authenticateThunk } from './components/authSlice'
import router from './reuter'
import HomeAcademy from './components/academy/HomeAcademy'
import HomePage from './components/home/HomePage'

function App() {
  const dispatch = useDispatch()
  const authStatus  = useSelector(state => state.auth);
  
  

  useEffect(() => {
    dispatch(authenticateThunk());
}, [ dispatch ]);



  return (
    <div className='app'>
      
        <RouterProvider router={router} />
        <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login/home' element={<Login />}/>
          <Route path='/academy' element={<HomeAcademy/>}/>
        </Routes>
        </HashRouter>
        <footer>

        </footer>
    </div>
  )
}

export default App
