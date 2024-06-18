import React from 'react'
import { Link } from 'react-router-dom'

const Curso = ({curso}) => {

    console.log(curso)

  return (
    <Link className='linkCursoId' to='/academy/home'>
    <div className='cursoId'>
        <img src={curso.image} alt="" width="100px" height="100px"/>
        <div className='descript'>
            <div className='info'>
                <h1 className='subName'>{curso.name}</h1>
                <p className='subP'>{curso.description}</p>
            </div>
            <div className='info'>
                <h1 className='subName'>{curso.name}</h1>
                <p className='subP'>{curso.description}</p>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Curso