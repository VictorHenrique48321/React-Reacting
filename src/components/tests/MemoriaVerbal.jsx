import React, { useState } from 'react'

import PrimeiraParte from './Teste 1/PrimeiraParte'
import SegundaParte from "./Teste 3/SegundaParte"

import language from "../../assets/image/language.png"
import "../../assets/css/tests/memoriaVerbal.css"

const MemoriaVerbal = () => {

  const [iniciar, setIniciar] = useState(false)

  if (!iniciar) {
    return (
      <PrimeiraParte
        Onclick={valor => setIniciar(valor)}
        testNome={"Teste de Memoria Verbal"}
        testIntroducao={"Uma palavra ira aparecer, se for uma palavra que nunca apareceu clique nova, caso seja uma palavra repetida clique repetida"}
        testImagem={language}
      />
    )
  } else {
    return (
      <SegundaParte />
    )
  }

}

export default MemoriaVerbal
