import React, { useState } from 'react';

import PrimeiraParte from './Teste 1/PrimeiraParte';
import SegundaParte from './Teste 5/SegundaParte';

import memoriaNumerica from "../../assets/image/numbers.png"

const Memorianumerica = () => {

  const [iniciar, setIniciar] = useState(false)

  if (!iniciar) {
    return (
      <PrimeiraParte
        Onclick={valor => setIniciar(valor)}
        testNome={"Memoria Numerica"}
        testIntroducao={"Quando o numero aparecer na tela, digite seu valor no campo vazio"}
        testImagem={memoriaNumerica}
      />
    )
  } else {
    return (
      <SegundaParte />
    )
  }

}

export default Memorianumerica