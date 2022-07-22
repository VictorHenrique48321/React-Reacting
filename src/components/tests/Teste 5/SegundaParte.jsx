import React, { useRef, useState } from 'react';

import "../../../assets/css/tests/memoriaNumerica.css"

const SegundaParte = () => {

  const [verificarTela, setVerificarTela] = useState("gerarNumero");

  const pegarNumeroInput = useRef("");
  const quantidadeNumeros = useRef("9")
  const armazenarNumero = useRef("")
  const level = useRef(1)
  const verificarResposta = useRef("")

  function mudarParaCampoVazio() {

    if (verificarTela === "gerarNumero") {
      setTimeout(() => {
        setVerificarTela("digitarNumero")
      }, 3000);
    }
  }

  function gerarNumero() {

    if (verificarTela === "gerarNumero") {
      const numeroGerado = Math.floor(Math.random() * quantidadeNumeros.current)
      armazenarNumero.current = numeroGerado
      return numeroGerado
    }
  }

  function adicionarMaisUmNumero() {

    setVerificarTela("status")

    console.log(typeof pegarNumeroInput.current.value)
    console.log(typeof armazenarNumero.current)

    if (Number(pegarNumeroInput.current.value) === armazenarNumero.current) {
      quantidadeNumeros.current = +quantidadeNumeros.current + "9"
      level.current = level.current + 1
      verificarResposta.current = "acertou"
    } else {
      quantidadeNumeros.current = "9"
      level.current = 1
      verificarResposta.current = "errou"
    }

  }

  function retornarBotoes() {

    if (verificarResposta.current === "acertou") {
      return "Proximo"
    } else {
      return "Tentar de novo"
    }
  }

  if (verificarTela === "gerarNumero") {
    return (
      <div className='test-MemoriaNumerica-layout'>
        <div className='test-MemoriaNumerica-numero'>{gerarNumero()}</div>
        {mudarParaCampoVazio()}
      </div>
    )
  } else if (verificarTela === "digitarNumero") {
    return (
      <div className='test-MemoriaNumerica-layout'>
        <h1 className='test-MemoriaNumerica-texto'>Qual era o numero</h1>
        <h2 className='test-MemoriaNumerica-explicacao'>Clique no botao para continuar</h2>
        <input className='test-MemoriaNumerica-digitarNumero' type="text" ref={pegarNumeroInput} />
        <button className='test-MemoriaNumerica-botao' onClick={adicionarMaisUmNumero}>Continuar</button>
      </div>
    )
  } else if (verificarTela === "status") {
    return (
      <div className='test-MemoriaNumerica-layout'>
        <h1 className='test-MemoriaNumerica-numeroStatus'>Numero</h1>
        <p className='test-MemoriaNumerica-numeroGerado'>{armazenarNumero.current}</p>
        <h2 className='test-MemoriaNumerica-numeroDigitadoStatus'>Seu numero</h2>
        <p className='test-MemoriaNumerica-numeroDigitado'>{pegarNumeroInput.current.value}</p>
        <h3 className='test-MemoriaNumerica-Level'>Level</h3>
        <p className='test-MemoriaNumerica-levelNumero'>{level.current}</p>
        <button className='test-MemoriaNumerica-botaoLevel' onClick={() => { setVerificarTela("gerarNumero") }}>{retornarBotoes()}</button>
      </div>
    )
  }

}

export default SegundaParte