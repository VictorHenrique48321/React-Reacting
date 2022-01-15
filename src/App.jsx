import Cabecalho from './components/Cabecalho';
import Home from './pages/home';
import Teste from './pages/teste';
import TestPagina from './pages/testPagina';
import PageNotFound from './pages/pageNotFound';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';
import "./assets/css/_reset.css"

function App() {

  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/testes" element={<Teste />} />
      </Routes>
      <Routes>
        <Route path="/testes/:test" element={<TestPagina />} />
      </Routes>
    </Router>
  );
}

export default App
