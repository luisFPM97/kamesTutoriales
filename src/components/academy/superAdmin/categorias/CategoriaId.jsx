import React, { useEffect, useState } from 'react'
import axios from '../../../../utils/axios'
import { useForm } from 'react-hook-form'
import Curso from '../cursos/Curso'
import Createcurso from '../cursos/Createcurso'

const CategoriaId = ({categoria, setConsCat, curso}) => {

    const [focus, setFocus] = useState(false)
    const [infoCat, setInfoCat] = useState(categoria)
    const [formCat, setFormCat] = useState(false)
    const { handleSubmit, formState: { errors } } = useForm()
    const submit = async (id) =>{
          setConsCat(prevState => !prevState)
        try {
          axios.delete(`/categorias/${categoria.id}`);
          
        } catch (error) {
          console.error('Error udeleting resource:', error);
        }
    }
    function setinfocatparams(params) {
      if (infoCat== categoria) {
        setInfoCat({})
        setFocus(false);
        console-log(infoCat)
      }else{
        setInfoCat(categoria)
        setFocus(true);
        console-log(infoCat)
      }
      setFocus();
    }
    function switchFormCat() {
      setFormCat(true)
    }
    useEffect(() => {
      if (focus) {
        setInfoCat(categoria)
      }else{
        setInfoCat({})
      }
    }, [])
    


  return (
    <>
    <div className={focus?'categoriaId focus':'categoriaId'} onSubmit={handleSubmit(submit)}>
        <h2 className='nombre' onClick={setinfocatparams}>{categoria.name}</h2>
        <button onClick={submit}>X</button>
        
        
    </div>
    <div className='contenedorCategoria'>
      {infoCat.cursos &&
        infoCat.cursos.sort((a, b) => a.id - b.id).map((curso, i) => (
          <Curso
          key={i}
          curso={curso}
          />
      ))}
                   
    </div>
    {
        infoCat.name &&
        <div className='crearModulo'>
            <button onClick={switchFormCat}>AÑADIR {infoCat.name}</button>
            <Createcurso
            CategoriaId={infoCat.id}
            setConsCat={setConsCat}
            setFormCat={setFormCat}
            formCat={formCat}
            />
        </div>
    }
    </>
  )
}

export default CategoriaId