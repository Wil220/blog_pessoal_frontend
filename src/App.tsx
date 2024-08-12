import React from 'react';
import './App.css';
import Home from './pagina/Home/Home';
import Navbar from './componets/navBar/NavBar';
import Footer from './componets/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pagina/login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
        {/* <Navbar /> */}
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;