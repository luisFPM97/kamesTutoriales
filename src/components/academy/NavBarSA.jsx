import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../authSlice'

const NavBarSA = ({me}) => {
    const dispatch = useDispatch()

    function showreg() {
        setShowRegister(true)
    }
    function showLog() {
        setShowLogin(true)
    }
    const roles = ["INACTIVO", "ESTUDIANTE", "PROFESOR", "ADMINISTRADOR"]
  return (
    <div className='navBar'>
        <div className='logoHome'>
            <Link className='linkLogo' to='/'><img src="/img/logoH.png" alt="" /></Link>
        </div>
        <span>{roles[me?.role]}</span>
        <div className='pagesSec'>
            <div className='navPages'>
                <Link className='home' to='/academy/home'>INICIO</Link>
                <Link className='login' to='/academy/me' >{me?.firstName} {me?.lastName}</Link>
                <Link className='login' to='/academy/admin_roles' >Administrar roles</Link>
                <Link className='login' to='/academy/admin_Categorias' >Administrar Categorias</Link>
                <Link className='login' to='/academy/admin_cursos' >Cursos</Link>
                <Link className='login' to='/' onClick={() => dispatch(logout())}>Cerrar sesion</Link>
                
            </div>
        </div>
    </div>
  )
}

export default NavBarSA