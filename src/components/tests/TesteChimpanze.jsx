import React, { useState } from 'react'

import PrimeiraParte from './Teste 1/PrimeiraParte'
import SegundaParte from './Teste 4/SegundaParte'

import monkey from "../../assets/image/monkey.png"

const TesteChimpanze = () => {

  const [iniciar, setIniciar] = useState(false)

  if (!iniciar) {
    return (
      <PrimeiraParte
        Onclick={valor => setIniciar(valor)}
        testNome={"Teste do chimpanze"}
        testIntroducao={"Clique nos quadrados em ordem crescente"}
        testImagem={monkey}
      />
    )
  } else {
    return (
      <SegundaParte />
    )
  }
}

export default TesteChimpanze