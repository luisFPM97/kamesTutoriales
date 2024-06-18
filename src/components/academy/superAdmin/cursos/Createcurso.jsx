import React from 'react'
import { useForm } from 'react-hook-form';
import axios from '../../../../utils/axios';
import { Link } from 'react-router-dom';

const Createcurso = ({CategoriaId, setConsCat,setFormCat, formCat}) => {
    const {register,handleSubmit,reset,formState: { errors },} = useForm();

    const submit = async cursoData =>{
        const body = {...cursoData}
        try{
            await axios.post('/cursos', body)
            reset()
            setConsCat(true)
        }catch (error) {
            console.error('Error updating resource:', error);
        }
        setFormCat(false)
    }
    function closeFormCat() {
        setFormCat(false)
    }
  return (
    <form onSubmit={handleSubmit(submit)} className={formCat ? 'cratecategoria ' : 'cratecategoria hiddenForm'}>
        
            <input type="text" placeholder='Nombre del curso'  {...register("name", {required: true})}/>
            <input className='description' type="text" placeholder='Descripcion del curso'  {...register("description", {required: true})}/>
            <input type="text" placeholder='Url de imagen a mostrar'  {...register("image", {required: true})}/>
            <input className='catId' type="text" value={CategoriaId} {...register("categoriumId", {required: true})}  />
            <button>crear</button>
            <span onClick={closeFormCat}>X</span>
        
    </form>
  )
}

export default Createcurso