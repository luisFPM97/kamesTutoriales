import {HashRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import router from './reuter'
import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { authenticateThunk } from './components/authSlice'
import './App.css'
import { Spinner } from 'react-bootstrap'
import AllUsers from './components/academy/AllUsers'
import MePage from './components/academy/MePage'
import AdminRole from './components/academy/superAdmin/AdminRole'
import VerificateEmail from './components/verificateEmail/VerificateEmail'
import Home from './components/home/Home'

function App() {
  const dispatch = useDispatch()
  const { authStatus } = useSelector(state => state.auth);
  
  useEffect(() => {
    dispatch(authenticateThunk());
  }, [ dispatch ]);
  
  if(authStatus === 'pending'){
    return <Spinner />
}
return (
    <>
        <RouterProvider router={router} />
        <HashRouter>
          <Routes>
            \\User routes
            <Route path="/academy/home" element={<AllUsers />} />
            <Route path="/academy/me" element={<MePage />} />
            <Route path="/academy/admin_roles" element={<AdminRole/>} />
            <Route path="/academy/admin_Categorias" element={<AdminCategoria/>} />
            \\Auth routes
            <Route path="/auth/verify_email/:email_code" element={<VerificateEmail />} />
            \\All Users
            <Route path="/" element={<Home />} />
          </Routes>
        </HashRouter>
    </>
)
}

export default App
