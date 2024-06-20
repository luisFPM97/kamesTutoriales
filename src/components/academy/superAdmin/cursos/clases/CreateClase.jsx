import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from '../../../../../utils/axios';

const CreateClase = (cursoId) => {


    const {register,handleSubmit,reset,formState: { errors },} = useForm();
    

    const submit = async cursoData =>{
        const body = {...cursoData}
        try{
            await axios.post('/clases', body)
            reset()
            
        }catch (error) {
            console.error('Error updating resource:', error);
        }
        
    }
    
    
  return (
    <form onSubmit={handleSubmit(submit)} >
            <input type="text" placeholder='Nombre del curso'  {...register("name", {required: true})}/>
            <input className='description' type="text" placeholder='Descripcion del curso'  {...register("description", {required: true})}/>
            <input type="text" placeholder='Url de imagen a mostrar'  {...register("videoUrl", {required: true})}/>
            <input className='catId' type="text" value={cursoId.cursoId} {...register("cursoId", {required: true})}  />
            <button>crear</button>
            <span >X</span>
            
    </form>
  )
}

export default CreateClase