import React, { useEffect, useState } from 'react'
import axios from '../../../utils/axios'
import CreateCategoria from './categorias/CreateCategoria'
import CategoriaId from './categorias/CategoriaId'

const AdminCategoria = () => {

    const [categorias, setCategorias] = useState([])
    const [consCat, setConsCat] = useState(false)

    console.log(consCat)

    useEffect(() => {
    if(consCat){
        axios.get('/categorias')
        .then(res => setCategorias(res.data));
        setConsCat(false)
    }else{
        axios.get('/categorias')
        .then(res => setCategorias(res.data));
    }
    }, [consCat])
    console.log(categorias)

    

  return (
    <div className='adminCategorias'>
        <div className='catsCont'>
            <CreateCategoria
                setConsCat={setConsCat}
            />
            <h1>Administrar Categorias</h1>
            
            <div className='catEncabezado'><span className='nombre'>Nombre</span><span className='descripcion'>Descripcion</span></div>
            {
                categorias.map((categoria, index) => (
                    <CategoriaId
                        key={index}
                        categoria={categoria}
                        setConsCat={setConsCat}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default AdminCategoria