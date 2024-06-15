
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import getConfigToken from '../../getTokenConfig';
import { useDispatch } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import axios from '../../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import ConfirmUpdate from './ConfirmUpdate';



const userCardAdmin = ({user}) => {

  const { handleSubmit, register, reset, formState: { errors } } = useForm()
  const [selectedRole, setSelectedRole] = useState(user.role || ''); // Initialize selectedRole with user's role or empty string
  const [roll, setRoll] = useState("")
  const [mConfirm, setMConfirm] = useState(false)
  const [rol, setRol] = useState(0)
  const listRol = ['null','Estudiante','Profesor','Administrador'];
  
  const handleRoleChange = ( userId, newRole) => {
    setSelectedRole(parseInt(newRole));
    console.log(newRole) // Update state with the selected role
    // Call a function (e.g., handleRoleUpdate) to perform the actual update (explained below)
    setRol(listRol[newRole])
    if (newRole==="") {
      setRoll("No Definido")
    }else{
      if (newRole==="1") {
        setRoll("Estudiante")
      }else{
        if (newRole==="2") {
          setRoll("Profesor")
          
        }else{
          if (newRole==="3") {
            setRoll("Administrador")
          }else{
          }
        }
      }
    }
  };
        const submit = async (data) =>{
          console.log(data)
          console.log(user.id)
          console.log(selectedRole)
          console.log(`/users/${user?.id}`)
          setMConfirm(true)
          console.log(mConfirm)
          try {
            axios.put(`/users/${user.id}`, { role: selectedRole });
            
          } catch (error) {
            console.error('Error updating resource:', error);
          }
          
        } 
  return (
    <div className='cardUserAdmin'>
      <ConfirmUpdate
      mConfirm={mConfirm}
      setMConfirm={setMConfirm}
      />
      <h2>{user.firstName} {user.lastName}</h2>
      <span>{user.id}</span>
      <p>Correo electrónico:  {user.email}</p>
      <span>{listRol[user.role]}</span>
      <span>{`Rol: ${roll}`}</span>
      <form action="" onSubmit={handleSubmit(submit)}>
      <input  type="text" placeholder={user.role} value={selectedRole} readOnly id='input' {...register("role")}/>
      <select
        name="mySelect"
        id={user.id}
        value={selectedRole}
        onChange={(event) => handleRoleChange(user.id, event.target.value)}
      >
        <option value={0}>Seleccionar rol</option>
        <option value={1}>Estudiante</option>
        <option value={2}>Profesor</option>
        <option value={3}>Administrador</option>
      </select>
      {selectedRole ===user.role  ?
        <span></span> : <button onClick={submit}>Update</button>
       }
      </form>
    </div>
  )
}

export default userCardAdmin