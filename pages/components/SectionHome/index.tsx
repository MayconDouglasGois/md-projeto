import React from 'react'
import style from "./style.module.scss"

const SectionHome = () => {
  return (
    <section className={style.container}>
        <div className={style.content}>
            <h1>MEU-PROJETO</h1>
            <h2>Projetos de Desenvolvimento Front-End</h2>
            <p><span></span> Em desenvolvimento...</p>
        </div>
    </section>
  )
}

export default SectionHome