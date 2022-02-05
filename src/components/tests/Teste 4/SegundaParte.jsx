import React, { useRef, useState, useEffect } from 'react'

import "../../../assets/css/tests/chimpanze.css"

const SegundaParte = () => {

  const [divCriada, setDivCriada] = useState(false);
  const [erros, setErros] = useState(0)

  const level = useRef(0)
  const pegarDivs = useRef([])
  const contador = useRef(1)
  const validarOrdem = useRef(1)

  function criarDivs() {

    pegarDivs.current = []

    const renderizarSeteVezes = [1, 2, 3, 4, 5, 6]

    return (
      <div>
        {renderizarSeteVezes.map((index) => (
          <div className='test-chimpanze-posicao' key={index}>
            <div className='test-chimpanze-numero' key={1} ref={(div) => { pegarDivs.current.push(div) }}></div>
            <div className='test-chimpanze-numero' key={2} ref={(div) => { pegarDivs.current.push(div) }}></div>
            <div className='test-chimpanze-numero' key={3} ref={(div) => { pegarDivs.current.push(div) }}></div>
            <div className='test-chimpanze-numero' key={4} ref={(div) => { pegarDivs.current.push(div) }}></div>
            <div className='test-chimpanze-numero' key={5} ref={(div) => { pegarDivs.current.push(div) }}></div>
            <div className='test-chimpanze-numero' key={6} ref={(div) => { pegarDivs.current.push(div) }}></div>
            <div className='test-chimpanze-numero' key={7} ref={(div) => { pegarDivs.current.push(div) }}></div>
          </div>
        ))}
      </div>
    );
  }

  function manipularDivs(gerarNumeros) {

    let array = []
    const levelTest = gerarNumeros + level.current
    contador.current = 1

    for (let i = 0; i < levelTest; i++) {

      const selecionarDiv = Math.floor(Math.random() * 42)

      if (!array.includes(selecionarDiv)) {

        array.push(selecionarDiv)

        pegarDivs.current[selecionarDiv].className = 'test-chimpanze-numeroSelecionado'
        pegarDivs.current[selecionarDiv].style.backgroundColor = "white"
        pegarDivs.current[selecionarDiv].innerHTML = contador.current
        pegarDivs.current[selecionarDiv].onclick = validarClique
        contador.current = contador.current + 1

      } else {

        let novaDiv = selecionarDiv + 1

        while (array.includes(novaDiv)) {
          novaDiv++
          if (novaDiv === 42) {
            novaDiv = 0
          }
        }

        pegarDivs.current[novaDiv].className = 'test-chimpanze-numeroSelecionado'
        pegarDivs.current[novaDiv].innerHTML = contador.current
        pegarDivs.current[novaDiv].onclick = validarClique
        contador.current = contador.current + 1
      }
    }
  }

  function validarClique(e) {
    if (e.target.innerHTML == validarOrdem.current) {

      for (let i = 0; i < pegarDivs.current.length; i++) {
        if (pegarDivs.current[i].className === 'test-chimpanze-numeroSelecionado') {
          pegarDivs.current[i].style.backgroundColor = "#226ca7"
        }
      }

      validarOrdem.current = validarOrdem.current + 1

      e.target.innerHTML = ""
      e.target.className = 'test-chimpanze-numero'

      if (validarOrdem.current === (level.current + 5)) {
        level.current = level.current + 1
        validarOrdem.current = 1
        contador.current = 1
        initialRender.current = true
        setDivCriada(false)
      }

    } else {
      validarOrdem.current = 1
      contador.current = 1
      initialRender.current = true
      setDivCriada(false)
      setErros(erros + 1)
    }
  }

  function iniciarTeste() {
    setDivCriada(true)
    if (erros === 3) {
      level.current = 0
      setErros(0)
    }
  }

  const initialRender = useRef(true)
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
    } else {
      manipularDivs(4)
    }
  }, [criarDivs])

  if (!divCriada && erros <= 2) {
    return (
      <div className='test-chimpanze-tabela'>
        <h1 className='test-chimpanze-informacaoLevel'>NUMEROS</h1>
        <h1 className='test-chimpanze-quantidadeNumeros'>{level.current + 4}</h1>
        <h2 className='test-chimpanze-informacaoLevel'>ERROS</h2>
        <h3 className='test-chimpanze-vidaRestante'>{erros} de 3</h3>
        <button className='test-chimpanze-comecar' onClick={() => setDivCriada(true)}>Comecar</button>
      </div>
    )
  } if (erros === 3) {
    return (
      <div className='test-chimpanze-tabela'>
        <h1 className='test-chimpanze-informacaoLevel'>Sua pontuacao foi</h1>
        <h1 className='test-chimpanze-quantidadeNumeros'>{level.current + 4}</h1>
        <button className='test-chimpanze-comecar' style={{ margin: "1rem" }} onClick={iniciarTeste}>Comecar</button>
      </div>
    )
  } else {
    return (
      <div className='test-chimpanze-tabela'>
        {
          criarDivs()
        }
      </div>
    )
  }
}

export default SegundaParte
