import Cabecalho from './components/Cabecalho';
import Teste from './pages/teste';
import TestPagina from './pages/testPagina';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';
import "./assets/css/_reset.css"

function App() {

  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route exact path="/" element={<Teste />} />
        <Route path="/testes/:test" element={<TestPagina />} />
      </Routes>
    </Router>
  );
}

export default App
