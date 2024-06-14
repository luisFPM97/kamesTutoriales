import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../authSlice'

const NavBarSA = ({me}) => {
    console.log(me)
    

    const dispatch = useDispatch()

    function showreg() {
        setShowRegister(true)
    }
    function showLog() {
        setShowLogin(true)
    }
  return (
    <div className='navBar'>
        <div className='logoHome'>
            <Link className='linkLogo' to='/'><img src="/img/logoH.png" alt="" /></Link>
        </div>
        

        <div className='pagesSec'>
            
            <div className='social'>
                <Link to='/'>CONTACTO</Link>
                <span>|</span>
                <ul className='shortSocial'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
                <span>|</span>
                <span>0</span>
                <span>1</span>
            </div>
            <div className='navPages'>
                <Link className='home' to='/academy/home'>INICIO</Link>
                <Link className='login' to='/academy/me' >{me?.firstName} {me?.lastName}</Link>
                <Link className='login' to='/academy/admin_roles' >Administrar roles</Link>
                <Link className='login' to='/' onClick={() => dispatch(logout())}>Cerrar sesion</Link>
                
            </div>
        </div>
    </div>
  )
}

export default NavBarSA