import React from 'react'

import keyBoard from "../../../assets/image/keyboard.png"
import language from "../../../assets/image/language.png"
import monkey from "../../../assets/image/monkey.png"
import numbers from "../../../assets/image/numbers.png"

const PrimeiraParte = (props) => {

  return (
    <div className='test' onClick={() => props.Onclick(true)}>
      <div className='test-imagem'>
        <img className='test-logo' src={props.testImagem} alt="relampago" />
      </div>
      <p className='test-nome'>
        {props.testNome}
      </p>
      <p className='test-introducao'>
        {props.testIntroducao}
      </p>
      <h2 className='test-iniciar'>
        Clique aqui para inicar
      </h2>
    </div>
  )
}

export default PrimeiraParte