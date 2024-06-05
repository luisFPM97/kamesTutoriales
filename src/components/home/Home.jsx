import React from 'react'

const Home = () => {
  return (
    <div className='homeP'>
        <header className='header'>
            <div className='search'>
                <h1>KAMES ACADEMY</h1>  
                <div className='inputs'>
                    <input type="text" />
                    <span>|SEARCH</span>
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
            <div className='tutoriales'></div>
            <div className='descargas'></div>
        </section>
    </div>
  )
}

export default Home