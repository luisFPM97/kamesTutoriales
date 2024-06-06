import React from 'react'

const Home = () => {
  return (
    <div className='homeP'>
        <header className='header'>
            <div className='search'>
                <h1>KAMES ACADEMY</h1>  
                <div className='inputs'>
                    <input type="text" />
                    <span><i class='bx bx-search'></i></span>
                </div>
            </div>
            <div className='programs'>
                
                <ul className='listP'>
                    <li className='iconP'><img src='/img/ZBRUSH.png' alt="" /></li>
                    <li className='iconP'><img src='/img/3DSMAX.png' alt="" /></li>
                    <li className='iconP'><img src='/img/3DSMAX.png' alt="" /></li>
                    <li className='iconP'><img src='/img/3DSMAX.png' alt="" /></li>
                    <li className='iconP'><img src='/img/3DSMAX.png' alt="" /></li>
                    <li className='iconP'><img src='/img/3DSMAX.png' alt="" /></li>
                    <li className='iconP'><img src='/img/3DSMAX.png' alt="" /></li>
                    <li className='iconP'><img src='/img/3DSMAX.png' alt="" /></li>
                    <li className='iconP'><img src='/img/3DSMAX.png' alt="" /></li>
                    <li className='iconP'><img src='/img/3DSMAX.png' alt="" /></li>
                    <li className='iconP'><img src='/img/3DSMAX.png' alt="" /></li>
                </ul>
            </div>
        </header>
        <section className='sliderCourses'>
            <div className='cursos'>
                <div className='tSec'>
                    <span className='ult'>Últimos</span>
                    <span className='curs'>CURSOS</span>
                    <hr />
                    <button>VER TODOS</button>
                </div>
                <div>
                </div>
            </div>
            <div className='tutoriales'>
                <div className='tSec'>
                    <span className='ult'>Últimos</span>
                    <span className='tut'>TUTORIALES</span>
                    <hr />
                    <button>VER TODOS</button>
                </div>
                <div>
                </div>
            </div>
            <div className='descargas'>
                <div className='tSec'>
                    <span className='ult'>Últimas</span>
                    <span className='curs'>DESCARGAS</span>
                    <hr />
                    <button>VER TODOS</button>
                </div>
                <div>
                </div>
            </div>
        </section>
        <section className='blog'>
            <span className='tittle'> Últimos post del Blog</span>
            <div className='posts'>
                <div className='post'>
                    <img src="" alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque illum tempore veritatis vel vero doloribus id deserunt non ipsa nam.</p>
                    <button>Ver más</button>
                </div>
                <div className='post'>
                    <img src="" alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque illum tempore veritatis vel vero doloribus id deserunt non ipsa nam.</p>
                    <button>Ver más</button>
                </div>
                <div className='post'>
                    <img src="" alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque illum tempore veritatis vel vero doloribus id deserunt non ipsa nam.</p>
                    <button>Ver más</button>
                </div>
                <div className='post'>
                    <img src="" alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque illum tempore veritatis vel vero doloribus id deserunt non ipsa nam.</p>
                    <button>Ver más</button>
                </div>
                <div className='post'>
                    <img src="" alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque illum tempore veritatis vel vero doloribus id deserunt non ipsa nam.</p>
                    <button>Ver más</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home