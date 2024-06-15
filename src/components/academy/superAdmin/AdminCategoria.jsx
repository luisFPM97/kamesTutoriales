import React, { useEffect, useState } from 'react'
import axios from '../../../utils/axios'
import CreateCategoria from './categorias/CreateCategoria'

const AdminCategoria = () => {

    const [categorias, setCategorias] = useState([])
    const [consCat, setConsCat] = useState(false)

    useEffect(() => {
      axios.get('/categorias')
        .then(res => setCategorias(res.data));

    if(consCat){
        axios.get('/categorias')
        .then(res => setCategorias(res.data));
        setConsCat(false)
    }
    }, [])
    console.log(categorias)
  return (
    <div>
        <h1>Administrar Categorias</h1>
        <CreateCategoria
            setConsCat={setConsCat}
        />
        {
            categorias.map((categoria, index) => (
                <div key={index}>
                    <h2>{categoria.name}</h2>
                    <p>{categoria.description}</p>
                    </div>
                    ))
        }
    </div>
  )
}

export default AdminCategoria