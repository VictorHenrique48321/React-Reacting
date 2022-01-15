import React from 'react'
import { useParams } from 'react-router-dom'

import TempoReacao from '../components/tests/TempoReacao'
import TreinarMira from '../components/tests/TreinarMira'

import "../assets/css/pages/testPagina.css"

function TestPagina() {
  let { test } = useParams()
  let listaTestes = [
    `{"test":"Temporeacao"}`, TempoReacao,
    `{"test":"Treinarmira"}`, TreinarMira,
  ]

  function validarTest() {
    const nomeTest = JSON.stringify({ test })

    for (let i = 0; i < listaTestes.length; i++) {
      if (listaTestes[i] === nomeTest) {
        const CarregarTeste = listaTestes[i + 1]
        return (
          <main className='testesPage'>
            <div className='testesPage-screen'>
              <CarregarTeste />
            </div>
          </main>
        )
      }
    }
  }

  return validarTest()
}

export default TestPagina