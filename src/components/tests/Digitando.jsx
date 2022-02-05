import React, { useState } from 'react';

import PrimeiraParte from './Teste 1/PrimeiraParte';
import SegundaParte from './Teste 6/SegundaParte';

import teclado from "../../assets/image/keyboard.png"

const Digitando = () => {

  const [iniciar, setIniciar] = useState(false)

  if (!iniciar) {
    return (
      <PrimeiraParte
        Onclick={valor => setIniciar(valor)}
        testNome={"Digitando"}
        testIntroducao={"Quantas palavras por minuto voce pode digitar"}
        testImagem={teclado}
      />
    )
  } else {
    return (
      <SegundaParte />
    )
  }
}

export default Digitando