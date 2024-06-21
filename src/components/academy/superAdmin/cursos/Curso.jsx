import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Admincurso from './Admincurso'
import axios from '../../../../utils/axios'

const Curso = ({curso}) => {

    const [defCurso, setDefCurso] = useState(false)
    const [infoclases, setInfoclases] = useState({})

    useEffect(() => {
            const fetchClases = async () => {
            const response = await axios.get(`/clases`);
            const filteredClases = response.data.filter(
              (clase) => clase.cursoId === curso.id
            );
            setInfoclases(filteredClases);
          };
      
          fetchClases();
    }, [curso.id])

    
    
    const idCurso = curso.id

    function admiCursoVisible() {
        setDefCurso(prevState => !prevState)
        axios.get('/clases')
        .then(res => setInfoclases(res.filter(
            (clase) => clase.cursoId === curso.id
        )))
    }

    

  return (
    <>
    <Link className='linkCursoId' to='/academy/admin_Categorias' onClick={admiCursoVisible}>
    <div className='cursoId'>
        <div className='descript'>
            <div className='info'>
                <h1 className='subName'>{curso.name}</h1>
            </div>
        </div>
    </div>
    
    </Link>
        <Admincurso idCurso={idCurso} defCurso={defCurso} curso={curso}
    /> 
    {
        infoclases.length > 0 ? 
        infoclases.map((clase, i)=>(
            <div key={i} className={defCurso?'Admincurso':'Admincurso AdmincursoHidden'}>
                <h2>{clase.name}</h2>
                <p>{clase.description}</p>
                <img src={clase.videoUrl} alt="IMAGEN DURSO" width='150px' height='150px'/>
            </div>
        ))
        : <p>No hay clases en este curso</p>
    }
    
    </>
  )
}

export default Curso