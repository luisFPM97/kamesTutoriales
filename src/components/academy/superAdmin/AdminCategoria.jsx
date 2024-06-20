import React, { useEffect, useState } from 'react'
import axios from '../../../utils/axios'
import CreateCategoria from './categorias/CreateCategoria'
import CategoriaId from './categorias/CategoriaId'
import ReactPlayer from 'react-player'
import Curso from './cursos/Curso'
import Createcurso from './cursos/Createcurso'

const AdminCategoria = () => {

    const [categorias, setCategorias] = useState([])
    const [consCat, setConsCat] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [longCat, setLongCat] = useState(0)
    const [formCat, setFormCat] = useState(false)
    
    
    
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


      useEffect(() => {
        // Ensure DynTube script is loaded only once
        if (typeof window._dyntube_v1_init === 'undefined') {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.src = 'https://embed.dyntube.com/v1.0/dyntube.js';
          document.getElementsByTagName('head')[0].appendChild(script);
          window._dyntube_v1_init = true;
        }
    
        return () => {
          // Clean up any potential event listeners on unmount (optional)
          // You might need to add specific event listeners based on your usage
        };
      }, []);
      

    function close() {
        setIsOpen(prevState => !prevState);
      }
      document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      });

      function switchFormCat() {
        setFormCat(true)
      }

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
                    categorias.length > 0 ?
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
                  :
                  <div>No hay categorias creadas</div>
                }
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
                <div className='contenedorCategoria'>
                {infoCat.cursos &&
                infoCat.cursos.sort((a, b) => a.id - b.id).map((curso, i) => (
                    <Curso
                    key={i}
                    curso={curso}
                    />
                ))}
                   
                </div>
            </div>
            <div className='vidoPlayer'><div data-dyntube-key="ZZcMlp3X0qQhjTnZHXSAQ"></div></div>
        
    </div>
  )
}

export default AdminCategoria