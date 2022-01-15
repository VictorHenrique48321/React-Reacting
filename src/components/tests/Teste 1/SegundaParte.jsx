import React, { useEffect, useState } from 'react'

const SegundaParte = () => {

  const [mudarFundo, setMudarFundo] = useState("#226ca7")
  const [textoIniciar, setTextoIniciar] = useState("Clique aqui para Iniciar")
  const [telaVerde, setTelaVerde] = useState(0)
  const [tempoReacao, setTempoReacao] = useState(0)

  function mudarCor(cor) {
    setMudarFundo(cor)
    setTextoIniciar("Clique aqui para Iniciar")

    if (mudarFundo === "#226ca7") {

      setMudarFundo("red")
      setTextoIniciar("Espere ficar verde")

      setTimeout(() => {
        setMudarFundo("green")
        setTextoIniciar("Clique!!!")

        const minutos = new Date().getMinutes()
        const segundos = new Date().getSeconds()
        const milissegundos = new Date().getMilliseconds()

        setTelaVerde(minutos * 60000 + segundos * 1000 + milissegundos)
      }, tempoAleatorio());
    }
  }

  function tempoAleatorio() {
    const tempo = [2000, 3000, 4000, 5000, 6000]
    const usarTempo = tempo[Math.floor(Math.random() * tempo.length)]
    return usarTempo
  }

  useEffect(() => {
    if (textoIniciar === "Clique!!!") {
      setTextoIniciar("Seu tempo foi de " + tempoReacao + " ms")
    }
  }, [tempoReacao])

  function pegarTempo() {

    if (mudarFundo === "#226ca7") {
      mudarCor()

    } if (mudarFundo === "red") {
      setTextoIniciar("Voce clicou muito cedo, espere ate ficar verde")
    }

    if (mudarFundo === "green") {
      const minutos = new Date().getMinutes()
      const seconds = new Date().getSeconds()
      const milliseconds = new Date().getMilliseconds()

      const tempo = minutos * 60000 + seconds * 1000 + milliseconds

      setTempoReacao(tempo - telaVerde)
    }

    if (textoIniciar === ("Seu tempo foi de " + tempoReacao + " ms")) {
      mudarCor("#226ca7")
    }
  }
  return (
    < div className='test-tempoReacao-ativo' style={{ backgroundColor: mudarFundo }}>
      <p className='test-tempoReacao-espera' onClick={pegarTempo}>{textoIniciar}</p>
    </div >
  )
}

export default SegundaParte