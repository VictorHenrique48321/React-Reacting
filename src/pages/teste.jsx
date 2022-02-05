import React from 'react'
import { Link } from 'react-router-dom'

import "../assets/css/pages/teste.css"
import lighting from "../assets/image/bolt.png"
import language from "../assets/image/language.png"
import aim from "../assets/image/aim.png"
import monkey from "../assets/image/monkey.png"
import numbers from "../assets/image/numbers.png"
import keyboard from "../assets/image/keyboard.png"

const Teste = () => {
  return (
    <main className='testes'>
      <div className='testes-testes'>
        <Link to="/testes/Temporeacao" className='testes-teste'>
          <img className="testes-imagem" src={lighting} alt="trovao" />
          <h1 className='testes-titulo'>Tempo de Reacao</h1>
          <p className='testes-sobre'>Teste seu tempo de reacao.
          </p>
        </Link>
        <Link to="/testes/Treinarmira" className='testes-teste'>
          <img className="testes-imagem" src={aim} alt="trovao" />
          <h1 className='testes-titulo'>Treinar Mira</h1>
          <p className='testes-sobre'>O quao rapido voce pode acertar os alvos.
          </p>
        </Link>
        <Link to="/testes/Memoriaverbal" className='testes-teste'>
          <img className="testes-imagem" src={language} alt="trovao" />
          <h1 className='testes-titulo'>Memoria Verbal</h1>
          <p className='testes-sobre'>Tente lembar a maior quantidade de palavras.
          </p>
        </Link>
        <Link to="/testes/Testechimpanze" className='testes-teste'>
          <img className="testes-imagem" src={monkey} alt="trovao" />
          <h1 className='testes-titulo'>Teste do chimpanze</h1>
          <p className='testes-sobre'>Voce e mais esperto que um chimpanze ?.
          </p>
        </Link>
        <Link to="/testes/Memorianumerica" className='testes-teste'>
          <img className="testes-imagem" src={numbers} alt="trovao" />
          <h1 className='testes-titulo'>Memoria numerica</h1>
          <p className='testes-sobre'>Se lembre do maior numero que puder.
          </p>
        </Link>
        <Link to="/testes/Digitando" className='testes-teste'>
          <img className="testes-imagem" src={keyboard} alt="trovao" />
          <h1 className='testes-titulo'>Digitando</h1>
          <p className='testes-sobre'>Quantas palavras por minuto voce pode digitar.
          </p>
        </Link>
      </div>
    </main >
  )
}

export default Teste