// import {FaFilePdf} from 'react-icons/fa'
import style from './style.module.scss'



const Footer = () => {

  const dataAtual = new Date();
const anoAtual = dataAtual. getFullYear();


  return (
    <footer>
    <div className={style.footerContent}>

      <span>© Copyright 2022-{anoAtual} - All Rights Reserved</span>
    </div>
    </footer>
  )
}

export default Footer