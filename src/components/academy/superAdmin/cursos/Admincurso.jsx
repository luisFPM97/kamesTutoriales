import React from 'react'
import CreateClase from './clases/CreateClase'

const Admincurso = ({idCurso,defCurso, curso}) => {

    

  return (
    <div className={defCurso?'Addclase':'Admincurso AdmincursoHidden'}>
        <p>{curso.description}</p>
        <button>Agregar Item</button>
        <CreateClase
        cursoId={curso.id}
        />
    </div>
  )
}

export default Admincurso