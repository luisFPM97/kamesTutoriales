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
          <h1>Únete hoy</h1>
          <input type="text" placeholder='Nombre'/>
          <input type="text" placeholder='Apellido'/>
          <input type="email" placeholder='Correo electrónico'/>
          <input type="password" placeholder='Contraseña'/>
          <button>EMPEZAR AHORA</button>
          <div className='terms'>
            <input type="checkbox" id="miCheckbox" name="miCheckbox"/>
            <p>Acepto los Términos, Condiciones y Políticas de Tutoriales Kames</p>
          </div>
        </section>
        <i className='bx bx-x' onClick={regfalse}></i>
      </div>
    </div>
  )
}

export default Register