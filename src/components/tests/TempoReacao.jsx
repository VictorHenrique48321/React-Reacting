import React, { useState } from 'react'

import "../../assets/css/tests/tempoReacao.css"
import tempoReacao from "../../assets/image/bolt.png"

import PrimeiraParte from "./Teste 1/PrimeiraParte"
import SegundaParte from "./Teste 1/SegundaParte"

const TempoReacao = () => {

  const [iniciar, setIniciar] = useState(false)

  if (!iniciar) {
    return (
      <PrimeiraParte
        Onclick={valor => setIniciar(valor)}
        testNome={"Teste de tempo de Reacao"}
        testIntroducao={"Quando o fundo se tornar vermelho, clique o mais rapido possivel dentro do botao"}
        testImagem={tempoReacao}
      />
    )
  } else {
    return (
      <SegundaParte />
    )
  }
}

export default TempoReacao