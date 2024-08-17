import React from 'react';
import './App.css';

import Navbar from './componets/navBar/NavBar';
import Footer from './componets/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pagina/login/Login';
import Cadastro from './pagina/cadastro/Cadastro';
import Home from './pagina/Home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './componets/temas/listarTemas/ListarTemas';
import FormularioTema from './componets/temas/formularioTemas/FormularioTemas';
import DeletarTema from './componets/temas/deletarTemas/DeteletarTemas';


function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;