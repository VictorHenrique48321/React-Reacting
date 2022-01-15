import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import "../assets/css/components/cabecalho.css"

const Cabecalho = () => {
  return (
    <header className='header'>
      <div className='header-paginas'>
        <div className='header-pagina'>
          <Link to="/" className='header-link'>
            <p>Home</p>
          </Link>
        </div>
        <div className='header-pagina'>
          <Link to="/testes" className='header-link'>
            <p>Testes</p>
          </Link>
        </div>
        <div className='header-conta'>
          <div className='header-pagina' id='header-conta'>
            <a className='header-link' href="#"><p>Cadastrar</p></a>
            <a className='header-link' href="#"><p>Logar</p></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Cabecalho