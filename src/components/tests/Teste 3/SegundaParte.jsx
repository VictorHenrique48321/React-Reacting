import React, { useRef, useState } from 'react'

const SegundaParte = () => {

  const [palavras, setPalavras] = useState(
    [
      "Banana", "Morango", "Amor", "Carro", "Comida", "Garfo",
      "Evolução", "Prazer", "Vacina", "Foguete", "Melancia", "Controle",
      "Televisao", "Moto", "Cavalo", "Gato", "Cachorro", "Janela",
      "Tepete", "Ventilador", "Tenis", "Raquete", "Bola", "Jaqueta"
    ],
  )
  const [render, setRender] = useState(false)
  const mostrarPalavra = useRef("")
  const palavraRepetida = useRef([])
  const vida = useRef(3)
  const pontuacao = useRef(0)


  function gerarPalavra() {

    const palavraGerada = (palavras[Math.floor(Math.random() * palavras.length)])

    mostrarPalavra.current = palavraGerada
  }

  function verificarPalavraRepetida(botaoApertado) {

    if (!palavraRepetida.current.includes(mostrarPalavra.current) && botaoApertado === "nova") {

      palavraRepetida.current = [...palavraRepetida.current, mostrarPalavra.current]
      pontuacao.current = pontuacao.current + 1

    } else if (palavraRepetida.current.includes(mostrarPalavra.current) && botaoApertado === "nova") {

      vida.current = vida.current - 1

    } else if (!palavraRepetida.current.includes(mostrarPalavra.current) && botaoApertado === "repetida") {

      palavraRepetida.current = [...palavraRepetida.current, mostrarPalavra.current]
      vida.current = vida.current - 1

    } else {

      pontuacao.current = pontuacao.current + 1

    }

    if (palavraRepetida.current.length === palavras.length) {
      vida.current = 0
    }
    setRender(!render)
  }

  function reiniciarTeste() {
    vida.current = 3
    palavraRepetida.current = []
    pontuacao.current = 0
    setRender(!render)
  }

  gerarPalavra()

  if (vida.current > 0) {
    return (
      <div className='test-memoriaVerbal-layout'>
        <div className='test-memoriaVerbal-hud'>
          <ul className='test-memoriaVerbal-dados'>
            <li className='test-memoriaVerbal-dado' >Vidas | {vida.current}</li>
            <li className='test-memoriaVerbal-dado'>Score | {pontuacao.current}</li>
          </ul>
          <p className='test-memoriaVerbal-palavra'>{mostrarPalavra.current}</p>
          <button onClick={() => verificarPalavraRepetida("nova")} className='test-memoriaVerbal-resposta'>NOVA</button>
          <button onClick={() => verificarPalavraRepetida("repetida")} className='test-memoriaVerbal-resposta'>REPETIDA</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='test-memoriaVerbal-final' onClick={reiniciarTeste}>
        <h1 className='test-memoriaVerbal-parabens'>Voce terminou o teste</h1>
        <p className='test-memoriaVerbal-pontuacao'>Voce conseguiu marcar {pontuacao.current} pontos </p>
        <p className='test-memoriaVerbal-iniciar'>Clique novamente para reinicar o teste</p>
      </div>
    )
  }
}

export default SegundaParte