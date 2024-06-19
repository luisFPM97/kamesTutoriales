import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Admincurso from './Admincurso'

const Curso = ({curso}) => {

    const [defCurso, setDefCurso] = useState(false)
    
    
    console.log(curso.clases)
    const idCurso = curso.id

    function admiCursoVisible() {
        setDefCurso(prevState => !prevState)
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
    <Admincurso idCurso={idCurso} defCurso={defCurso} curso={curso}/> 
    </>
  )
}

export default Curso