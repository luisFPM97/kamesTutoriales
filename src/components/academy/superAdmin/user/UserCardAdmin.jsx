
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import getConfigToken from '../../getTokenConfig';
import { useDispatch } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import axios from '../../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import ConfirmUpdate from './ConfirmUpdate';



const userCardAdmin = ({user}) => {

  const [us, setUs] = useState(user)
  const { handleSubmit, register, reset, formState: { errors } } = useForm()
  const [selectedRole, setSelectedRole] = useState(user.role || ''); // Initialize selectedRole with user's role or empty string
  const [roll, setRoll] = useState("")
  const [mConfirm, setMConfirm] = useState(false)
  const [rol, setRol] = useState(0)
  const listRol = ['null','Estudiante','Profesor','Administrador'];
  
  useEffect(() => {
    axios.get(`/users/${user.id}`)
      .then(res => setUs(res.data));
  }, []);
  
  const handleRoleChange = ( userId, newRole) => {
    setSelectedRole(parseInt(newRole));
     // Update state with the selected role
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
            if (newRole==="0") {
              setRoll("inactivo")
            }else{
            }
          }
        }
      }
    }
  };
        const submit = async (data) =>{
          setMConfirm(true)
          try {
            axios.put(`/users/${user.id}`, { role: selectedRole });
            try{
              axios.get(`/users/${user.id}`)
            .then(res => setUs(res.data));
            }catch (error) {
              console.error('Error updating resource:', error);
            }
          } catch (error) {
            console.error('Error updating resource:', error);
          }
          
          
        } 
  return (
    <div className='cardUserAdmin'>
        <h2>{us.firstName} {us.lastName}</h2>
        <p>{user.email}</p>
        <span className='userRoleS'>{listRol[us.role]}</span>
      <form action="" onSubmit={handleSubmit(submit)}>
        <input  type="text" placeholder={user.role} value={selectedRole} readOnly id='input' {...register("role")}/>
        <select
          name="mySelect"
          id={user.id}
          value={selectedRole}
          onChange={(event) => handleRoleChange(user.id, event.target.value)}
        >
          <option value={0}>Desactivar usuario</option>
          <option value={1}>Estudiante</option>
          <option value={2}>Profesor</option>
          <option value={3}>Administrador</option>
        </select>
        {selectedRole ===us.role  ?
          <span></span> : <button onClick={submit}>Update</button>
        }
      </form>
    </div>
  )
}

export default userCardAdmin