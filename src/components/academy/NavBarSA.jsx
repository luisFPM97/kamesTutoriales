import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../authSlice'

const NavBarSA = ({me}) => {
    const dispatch = useDispatch()

    const [collapseM, setCollapseM] = useState(true)

    function showreg() {
        setShowRegister(true)
    }
    function showLog() {
        setShowLogin(true)
    }
    function collapse() {
        setCollapseM(prevState => !prevState);
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
                {roles[me?.role] === 'ADMINISTRADOR' && (
          <div className='menu'>
            <span className='btncolAdnmin login' onClick={collapse}>Administrar<i className={collapseM ? 'bx bx-chevron-right' :'bx bx-chevron-down'}></i></span>
            <div className={collapseM ? 'contenedor Collapse' : 'contenedor Expand'}>
              <Link className='login' to='/academy/admin_roles' onClick={collapse}>Administrar roles</Link>
              <Link className='login' to='/academy/admin_Categorias' onClick={collapse}>Administrar Categorias</Link>
              <Link className='login' to='/academy/admin_cursos' onClick={collapse}>Cursos</Link>
            </div>
          </div>
        )}
                <Link className='login' to='/' onClick={() => dispatch(logout())}>Cerrar sesion</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBarSA