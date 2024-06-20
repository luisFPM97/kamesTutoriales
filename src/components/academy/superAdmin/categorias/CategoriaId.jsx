import React, { useState } from 'react'
import axios from '../../../../utils/axios'
import { useForm } from 'react-hook-form'

const CategoriaId = ({categoria, setConsCat, setInfoCat,infoCat}) => {

    const [focus, setFocus] = useState(false)
    const { handleSubmit, formState: { errors } } = useForm()
    const submit = async (id) =>{
          setConsCat(true)
        try {
          axios.delete(`/categorias/${categoria.id}`);
          
        } catch (error) {
          console.error('Error udeleting resource:', error);
        }
    }
    function setinfocatparams(params) {
      setInfoCat(categoria)
      setFocus(prevState => !prevState);
    }

  return (
    <div className={infoCat===categoria?'categoriaId focus':'categoriaId'} onSubmit={handleSubmit(submit)}>
        <h2 className='nombre' onClick={setinfocatparams}>{categoria.name}</h2>
        <button onClick={submit}>X</button>
        
    </div>
  )
}

export default CategoriaId