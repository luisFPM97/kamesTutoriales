import React from 'react'
import CreateClase from './clases/CreateClase'

const Admincurso = ({idCurso,defCurso, curso}) => {
    console.log(idCurso)
    console.log(defCurso)
    console.log(curso)
    

  return (
    <div className={defCurso?'Admincurso':'Admincurso AdmincursoHidden'}>
        <h2>{curso.name}</h2>
        <p>{curso.description}</p>
        <button>Agregar Item</button>
        <CreateClase
        cursoId={curso.id}
        />
    </div>
  )
}

export default Admincurso