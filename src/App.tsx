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
import ListaPostagens from './componets/postagens/listaPostagens/ListaPostagens';
import FormularioPostagem from './componets/postagens/formularioPostagem/FormularioPostagem';
import DeletarPostagem from './componets/postagens/deletarPostagem/DeletarPostagem';
import Perfil from './pagina/perfil/Perfil';


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
              <Route path="/Postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;
