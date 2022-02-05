import React from 'react'
import { useParams } from 'react-router-dom'

import TempoReacao from '../components/tests/TempoReacao'
import TreinarMira from '../components/tests/TreinarMira'
import MemoriaVerbal from '../components/tests/MemoriaVerbal'
import TesteChimpanze from '../components/tests/TesteChimpanze'
import Memorianumerica from '../components/tests/MemoriaNumerica'
import Digitando from '../components/tests/Digitando'

import "../assets/css/pages/testPagina.css"

function TestPagina() {
  let { test } = useParams()
  let listaTestes = [
    `{"test":"Temporeacao"}`, TempoReacao,
    `{"test":"Treinarmira"}`, TreinarMira,
    `{"test":"Memoriaverbal"}`, MemoriaVerbal,
    `{"test":"Testechimpanze"}`, TesteChimpanze,
    `{"test":"Memorianumerica"}`, Memorianumerica,
    `{"test":"Digitando"}`, Digitando,
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