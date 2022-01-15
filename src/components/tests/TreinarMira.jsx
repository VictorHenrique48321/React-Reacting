import React, { useState } from 'react'

import PrimeiraParte from "./Teste 1/PrimeiraParte"
import SegundaParte from './Teste 2/SegundaParte'

import treinarMira from "../../assets/image/aim.png"

const TreinarMira = () => {

  const [iniciar, setIniciar] = useState(false)

  if (!iniciar) {
    return (
      <PrimeiraParte
        Onclick={valor => setIniciar(valor)}
        testNome={"Teste de tiro ao alvo"}
        testIntroducao={"Quando um alvo aparecer, clique os mais rapido que puder"}
        testImagem={treinarMira}
      />
    )
  } else {
    return (
      <SegundaParte
        alvo={treinarMira}
      />
    )
  }
}

export default TreinarMira