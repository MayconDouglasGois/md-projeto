import React from 'react'
import style from './style.module.scss'



const Home = () => {
  return (
    <div className={style.container}>
        <header className={style.contain}>
        <nav>
        <a href="#" className={style.active}>Home</a>
        <a href="#">contato</a>
        </nav>


        </header>
    </div>
  )
}


export default Home