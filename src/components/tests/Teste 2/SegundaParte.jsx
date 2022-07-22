import React, { useState } from 'react'

import "../../../assets/css/tests/treinarMira.css"

const SegundaParte = (props) => {

  const [reiniciar, setReiniciar] = useState(0)
  const [tempoIniciar, setTempoIniciar] = useState([])

  function retornar() {

    if (reiniciar < 20) {
      const posicaoAlvo = mudarPosicaoAlvo()

      return (
        <div className='test-treinarMira-areaAlvo'>
          <div className='test-treinarMira-area'>
            <img
              className='test-treinarMira-alvo'
              src={props.alvo} alt="alvo"
              onClick={adicionarUm}
              style=
              {{
                marginTop: posicaoAlvo[1],
                marginLeft: posicaoAlvo[0]
              }}
            />
          </div>
        </div>
      )
    } else {

      const hora = new Date().getTime()
      const pontuacao = (hora - tempoIniciar[0]) / 20

      return (
        <div className='test-treinarMira-resultado' onClick={reiniciarTest}>
          <h1 className='test-treinarMira-concluido'>Voce conclui o teste</h1>
          <h2 className='test-treinarMira-subtexto'>Seu tempo medio por alvo foi de {pontuacao}ms </h2>
          <h3 className='test-treinarMira-subtexto'>Clique novamente para reiniciar o teste</h3>
        </div>
      )
    }
  }

  function reiniciarTest() {
    setReiniciar(0)
    setTempoIniciar([])
  }

  function adicionarUm() {
    retornar()
    const hora = new Date().getTime()
    setReiniciar(reiniciar + 1)
    setTempoIniciar([...tempoIniciar, hora])
  }

  function mudarPosicaoAlvo() {
    const mudarAlvoVerticalmente = ["0em", "5em", "10em", "15em", "20em", "22em"]
    const mudarAlvoHorizontalmente = ["0em", "10em", "20em", "30em", "40em", "50em", "55em"]

    const posicaoVertical = mudarAlvoVerticalmente[Math.floor(Math.random() * mudarAlvoVerticalmente.length)]
    const posicaoHorizontal = mudarAlvoHorizontalmente[Math.floor(Math.random() * mudarAlvoHorizontalmente.length)]

    const posisaoAlvo = [posicaoHorizontal, posicaoVertical]

    return posisaoAlvo
  }

  return (
    < div className='test-tempoReacao-ativo'>
      <p className='test-treinarMira-alvoRestante'>{reiniciar}/20</p>
      {retornar()}
    </div >
  )
}

export default SegundaParte