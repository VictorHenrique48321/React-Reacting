import React from 'react'

import "../assets/css/pages/home.css"
import icone from "../assets/image/analytics.png"

const Home = () => {
  return (
    <main className='main'>
      <div className='main-home'>
        <img className="main-icone" src={icone} alt="pesquisa" />
        <h1 className='main-title'>React Reacting</h1>
        <p className='main-sobre'>
          Site feito com o propósito de praticar e aprimorar minhas habilidades, é composto de diversos testes feitos com o propósito de medir sua habilidades com jogos
        </p>
      </div>
    </main>
  )
}

export default Home