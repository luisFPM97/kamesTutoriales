import React from 'react'
import { useForm } from 'react-hook-form';
import axios from '../../../../utils/axios';

const CreateCategoria = ({setConsCat, isOpen, setIsOpen}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const submit = async categoriaData =>{
        setConsCat(true)
        const body = {...categoriaData}
        try{
            await axios.post('/categorias', body)
            reset()
        }catch (error) {
          console.error('Error updating resource:', error);
          
        }
      }
      
      function close() {
        setIsOpen(prevState => !prevState);
      }

  return (
    <div className={isOpen? "createCategoria " : "createCategoria isClose" } >

        <h1>Crear Categoria</h1>
        <form action=""  onSubmit={handleSubmit(submit)}>
            <label for="nombre">Nombre:</label><br />
            <input type="text" id="nombre" name="nombre" {...register("name", {required: true})}/>
            <br />
            <label for="descripcion">Descripcion:</label>
            <br />
            <textarea id="descripcion" name="descripcion" {...register("description", {required: true})}></textarea>
            <br />
            <button className=''>Crear</button>
        </form>
        <button className='btnClose' onClick={close}>X</button>
    </div>
  )
}

export default CreateCategoria