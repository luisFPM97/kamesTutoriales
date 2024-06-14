
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import getConfigToken from '../../getTokenConfig';
import axios from '../../../../utils/axios';



const userCardAdmin = ({user,key,users, setUsers}) => {

  const { handleSubmit, register, reset, formState: { errors } } = useForm()
  const [selectedRole, setSelectedRole] = useState(user.role || ''); // Initialize selectedRole with user's role or empty string
  const [roll, setRoll] = useState("")
  const [rol, setRol] = useState(0)

  const listRol = [0,1,2,3];

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
  const path = `/users/${user.id}`
    console.log(path)
  const submit = data =>{
    const token = getConfigToken();
    console.log(path)
    try{
      axios.put(path, {role: selectedRole})
      .then(res =>{
        console.log(res.data)
        setUsers(users.map(e => e.id === user.id ? res.data : e))
     })
     .catch(err => console.log(err))
    }finally{
      reset()
    }
  }
  

  
  
  
  return (
    <div className='cardUserAdmin'>
      <h2>{user.firstName} {user.lastName}</h2>
      <p>Correo electrónico:  {user.email}</p>
      <span>{listRol[user.role]}</span>
      <span>{`Rol: ${roll}`}</span>
      <form action="" onSubmit={handleSubmit(submit)}>
      <input  type="text" placeholder={user.role} value={selectedRole} readOnly id='input' {...register("role")}/>
      <select
        name="mySelect"
        id={`mySelect-${key}`}
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