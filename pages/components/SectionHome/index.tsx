import React from "react";
import style from "./style.module.scss";

const MdCommmerce = () => {
  return (
    <>
      <div className={style.backgroundImage}>
        <section className={style.main}>
          <h1>MD-PROJETO</h1>
          <p>
          Projeto de e-commerce usando o stripe para cadastro e pagamento, o Next Auth autenticação e login e o faunaDB para armazenamento do e-mail do cliente.
          </p>
          <button>
            <a
              href="https://md-commerce.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Clique aqui para acessar o site
            </a>
          </button>
        </section>
      </div>
      <div className={style.container}>
        <section className={style.row}>
          <div>
            <h2>Seu e-Commmerce</h2>
            <span>Desenvolvido para sua loja online</span>
          </div>
          <picture>
            <img src="pc.png" alt="computador" />
          </picture>
        </section>
        <section className={style.rewReverse} >
          <div>
            <h2>Desing Responsivo</h2>
            <span>Layout se adapta a qualquer tamanho de tela</span>
          </div>
          <picture>
            <img src="cel.png" alt="celular" />
          </picture>
        </section>
      </div>
    </>
  );
};

export default MdCommmerce;
