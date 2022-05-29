import React from 'react'
import style from "./style.module.scss"

const SectionHome = () => {
  return (
    <section className={style.container}>
        <div className={style.content}>
            <h1>MEU-PROJETO</h1>
            <p>Projetos de Desenvolvimento Front-End</p>
            <span>Em desenvolvimento</span>
        </div>
    </section>
  )
}

export default SectionHome