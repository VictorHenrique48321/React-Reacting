import React, { useRef, useState } from 'react';

import "../../../assets/css/tests/digitando.css"

const SegundaParte = () => {

  const [testeConcluido, setTesteConcluido] = useState(false);

  const texto = useRef("Mais uma noite como todas as anteriores. Pego minha caneca de café cheia, acendo meu ultimo cigarro e corro pra velha janela do quarto. Observo a noite fria e chuvosa, até parece confortável por um momento, se não fossem as dezenas de preocupações que me desmotivam a cada dia.");
  const validarTexto = useRef([])
  const inputTexto = useRef([])
  const posicaoLetra = useRef()
  const selecionarAreaTexto = useRef()
  const tempoInicial = useRef()
  const precisao = useRef()

  function printTexto(e) {
    inputTexto.current = [...e.target.value]

    const indexLetra = inputTexto.current.length - 1

    if (indexLetra === 0) {
      tempoInicial.current = new Date().getTime() / 1000
    }

    posicaoLetra.current = indexLetra

    if (inputTexto.current[indexLetra] === validarTexto.current[indexLetra].innerHTML) {
      validarTexto.current[indexLetra].classList.remove("errada")
      validarTexto.current[indexLetra].classList.add("correta")
    } else if (inputTexto.current[indexLetra] !== validarTexto.current[indexLetra].innerHTML) {
      validarTexto.current[indexLetra].classList.remove("correta")
      validarTexto.current[indexLetra].classList.add("errada")
    }

    if (indexLetra === texto.current.length - 1) {
      const tempo = new Date().getTime() / 1000

      let calcularPrecisao = 0

      for (let i = 0; i < texto.current.length; i++) {
        if (validarTexto.current[i].className === "correta") {
          calcularPrecisao = calcularPrecisao + 1
        }
      }

      precisao.current = (calcularPrecisao * 100) / texto.current.length
      tempoInicial.current = tempo - tempoInicial.current

      setTesteConcluido(true)
    }
  }

  function teste(e) {
    if (e.keyCode === 8) {
      validarTexto.current[posicaoLetra.current].classList.remove("errada")
      validarTexto.current[posicaoLetra.current].classList.remove("correta")
    } else if (e.ctrlKey) {
      if (e.keyCode === 65 || e.keyCode === 90 || e.keyCode === 88 || e.keyCode === 67 || e.keyCode === 86) {
        e.preventDefault()
      }
    }
  }

  function reiniciarTeste() {
    posicaoLetra.current = ""
    validarTexto.current = []
    inputTexto.current = []
    setTesteConcluido(false)
  }

  function renderizarPalavra() {
    const textoGerado = texto.current

    let lista = []

    textoGerado.split("").forEach(letra => {
      lista.push(letra)
    })

    return (
      lista.map((index => (
        <span ref={(div) => { validarTexto.current.push(div) }}>{index}</span>
      )))
    )
  }

  if (testeConcluido === false) {
    return (
      <div className='digitando-layout' onClick={() => selecionarAreaTexto.current.focus()}>
        <div className='digitando-hud'>
          <div className='digitando-texto'>
            {renderizarPalavra()}
          </div>
          <textarea
            className='digitando-digitar-texto'
            type="text"
            onChange={printTexto}
            onKeyDown={teste}
            autoFocus
            ref={selecionarAreaTexto}
          >
          </textarea>
        </div>
      </div >
    )
  } else {
    return (
      <div className='digitando-layout' onClick={reiniciarTeste}>
        <h1 className='digitando-status'>Seu tempo foi de </h1>
        <h2 className='digitando-score'>{tempoInicial.current.toFixed(2)} segundos</h2>
        <h1 className='digitando-status'>Sua precisao foi de</h1>
        <h2 className='digitando-score'>{precisao.current.toFixed(2)}%</h2>
        <h3 className='digitando-reiniciar'>Clique novamente na tela para reiniciar o teste</h3>
      </div>
    )
  }
}

export default SegundaParte