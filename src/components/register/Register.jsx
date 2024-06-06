import React from 'react'

const Register = ({showRegister, setShowRegister}) => {

  function regfalse() {
    setShowRegister(false)
  }

  return (
    <div className={showRegister ? 'registerP' : 'registerP modalF'}>
      <div className='modal'>
        <div className='img'>
          <img src="/img/logoalfa.png" alt="" />
        </div>
        <section className='form'>
          <input type="text" placeholder='Nombre'/>
          <input type="text" placeholder='Apellido'/>
          <input type="email" placeholder='Correo electrónico'/>
          <input type="password" placeholder='Contraseña'/>
          <button>EMPEZAR AHORA</button>
        </section>
        <i className='bx bx-x' onClick={regfalse}></i>
      </div>
    </div>
  )
}

export default Register