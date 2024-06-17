import React from 'react'
import axios from '../../../../utils/axios'
import { useForm } from 'react-hook-form'

const CategoriaId = ({categoria, setConsCat}) => {

    
    const { handleSubmit, register, reset, formState: { errors } } = useForm()
    
    
    const submit = async (id) =>{
          setConsCat(true)
        try {
          axios.delete(`/categorias/${categoria.id}`);
          
        } catch (error) {
          console.error('Error udeleting resource:', error);
        }
        
        
    }

  return (
    <div className='categoriaId' onSubmit={handleSubmit(submit)}>
        <h2 className='nombre'>{categoria.name}</h2>
        <p className='descripcion'>{categoria.description}</p>
        <button onClick={submit}>X</button>
    </div>
  )
}

export default CategoriaId