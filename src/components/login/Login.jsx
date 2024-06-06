import React from 'react'

const Login = ({setShowLogin, showLogin}) => {

  function logFalse() {
    setShowLogin(false)
  }

  return (
    <div className={showLogin ? 'loginP' : 'loginP loginPF'}>
      <div className='modal'>
        <div className='img'>
          <img src="/img/logoalfa.png" alt="" />
        </div>
        <section className='form'>
          <input type="email" placeholder='Correo electrónico'/>
          <input type="password" placeholder='Contraseña'/>
          <button>EMPEZAR AHORA</button>
        </section>
        <i className='bx bx-x' onClick={logFalse}></i>
      </div>
    </div>
  )
}

export default Login