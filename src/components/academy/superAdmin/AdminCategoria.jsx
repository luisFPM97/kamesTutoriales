import React, { useEffect, useState } from 'react'
import axios from '../../../utils/axios'
import CreateCategoria from './categorias/CreateCategoria'
import CategoriaId from './categorias/CategoriaId'
import ReactPlayer from 'react-player'

const AdminCategoria = () => {

    const [categorias, setCategorias] = useState([])
    const [consCat, setConsCat] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [longCat, setLongCat] = useState(0)
    

    
    const [infoCat, setInfoCat] = useState({})
    
    useEffect(() => {
        if (consCat) {
          axios.get('/categorias')
            .then(res => {
              const categoriasOrdenadas = res.data.sort((a, b) => a.id - b.id);
              setCategorias(categoriasOrdenadas);
              setLongCat(categorias.length)
              setInfoCat(categorias[0])
            });
          setConsCat(false);
        } else {
          axios.get('/categorias')
            .then(res => {
              const categoriasOrdenadas = res.data.sort((a, b) => a.id - b.id);
              setCategorias(categoriasOrdenadas);
            });
        }
      }, [consCat]);
    function close() {
        setIsOpen(prevState => !prevState);
      }
      
    
      document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      });


  return (
    <div className='adminCategorias' onContextMenu={(e) => e.preventDefault()}>
        <CreateCategoria
            setConsCat={setConsCat}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
            <button className='addCat' onClick={close}>Agregar categoria</button>
            <div className='catsCont'>
                <h1>Categorias</h1>
                <div className='listcat'>
                {
                    categorias.map((categoria, index) => (
                        <CategoriaId
                            key={index}
                            categoria={categoria}
                            setConsCat={setConsCat}
                            setInfoCat={setInfoCat}
                            infoCat={infoCat}
                            longCat={longCat}
                        />
                    ))
                }
                </div>
                <b>{infoCat.name}</b>
                <div>
                    <button>AÑADIR {infoCat.name}</button>
                </div>
                <div className='contenedorCategoria'>
                    <div className='cursoId'>
                        
                        <iframe src="https://drive.google.com/file/d/1C3KWAwPoCanxJgilRBnU0-vnBhd_kx3D/preview?t=1
                            " width="350" height="250"></iframe>
                        <div className='descript'>
                            <div className='info'>
                                <span className='subName'>nombre del curso</span>
                                <p className='subP'>Acá va una breve descripción del curso</p>
                            </div>
                            <div className="instructor">
                                <span className='subName'>Instructor:</span>
                                <p className='subP'>Nombre del instructor</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='cursoId'>
                        <video src="blob:https://drive.google.com/file/d/1C3KWAwPoCanxJgilRBnU0-vnBhd_kx3D/preview?t=1"></video>
                        <div className='descript'>
                            <div className='info'>
                                <span className='subName'>nombre del curso</span>
                                <p className='subP'>Acá va una breve descripción del curso</p>
                            </div>
                            <div className="instructor">
                                <span className='subName'>Instructor:</span>
                                <p className='subP'>Nombre del instructor</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    </div>
  )
}

export default AdminCategoria