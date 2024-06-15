import React, { useEffect, useState } from 'react'
import axios from '../../../utils/axios';
import UserCardAdmin from './user/UserCardAdmin';
import { Link } from 'react-router-dom';

const AdminRole = () => {

  const [users, setUsers] = useState([]);
  const [actualizar, setActualizar] = useState(false)

    useEffect(() => {
        axios.get('/users')
          .then(res => setUsers(res.data));
        
          if (actualizar) {
            axios.get('/users')
              .then(res => setUsers(res.data));
              setActualizar(false)
          }
        
    }, [actualizar]);
      
    function changeRole() {
      setActualizar(true)
    }

  return (
    <div className='adminRoles'>
      <span className='Subtitle'>Administradores</span>
      <div className='encabezado'>
          <span className='nombre'> Usuario</span>
          <span className='correo'>Correo Electrónico</span>
          <span className='rol'>Rol</span>
          <span className='actRol'>Actualizar Rol</span>
      </div>
      {
        users.filter((user) => user.role === 3).map((user, index) => (
          <UserCardAdmin
            key={index}
            user={user}
            users={users} 
            setUsers={setUsers} 
          />
        ))
      }
      <div className='footerTable'>
      <Link className='actualizar' to='/academy/admin_roles' onClick={changeRole}>Actualizar roles</Link>
      </div>
      <span className='Subtitle'>Profesores</span>
      <div className='encabezado'>
          <span className='nombre'> Usuario</span>
          <span className='correo'>Correo Electrónico</span>
          <span className='rol'>Rol</span>
          <span className='actRol'>Actualizar Rol</span>
      </div>
      {
        users.filter((user) => user.role === 2).map((user, index) => (
          <UserCardAdmin
            key={index}
            user={user}
            users={users} 
            setUsers={setUsers} 
          />
        ))
      }
      <div className='footerTable'>
      <Link className='actualizar' to='/academy/admin_roles' onClick={changeRole} >Actualizar roles</Link>
      </div>
      <span className='Subtitle'>Estudiantes</span>
      <div className='encabezado'>
          <span className='nombre'> Usuario</span>
          <span className='correo'>Correo Electrónico</span>
          <span className='rol'>Rol</span>
          <span className='actRol'>Actualizar Rol</span>
      </div>
      {
        users.filter((user) => user.role === 1).map((user, index) => (
          <UserCardAdmin
            key={index}
            user={user}
            users={users} 
            setUsers={setUsers} 
          />
        ))
      }
      <div className='footerTable'>
      <Link className='actualizar' to='/academy/admin_roles' onClick={changeRole}>Actualizar roles</Link>
      </div>
      <span className='Subtitle'>Usuarios inactivos</span>
      <div className='encabezado'>
          <span className='nombre'> Usuario</span>
          <span className='correo'>Correo Electrónico</span>
          <span className='rol'>Rol</span>
          <span className='actRol'>Actualizar Rol</span>
      </div>
      {
        users.filter((user) => user.role === 0).map((user, index) => (
          <UserCardAdmin
            key={index}
            user={user}
            users={users} 
            setUsers={setUsers} 
          />
        ))
      }
      <div className='footerTable'>
      <Link className='actualizar' to='/academy/admin_roles' onClick={changeRole}>Actualizar roles</Link>
      </div>
    </div>
  )
}

export default AdminRole