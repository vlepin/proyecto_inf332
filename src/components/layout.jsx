import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'; // Importa Navigate y Link

import Home from '../pages/home'; 
import RegisterPage from '../pages/register_page'; 
import DeletePage from '../pages/delete_page'; 
import EditPage from '../pages/edit_page'; 
import EventDetails from '../pages/EventDetails'; // Importa la página de detalles
import NavBar from '../components/nav_bar';
import logo from '../assets/rree.png';

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'> 
        <Link to="/home"> {/* Enlace que redirige al inicio */}
          <img src={logo} alt="Logo de Relaciones Estudiantiles" className='layout__logo' />
        </Link>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            {/* Redirige automáticamente desde "/" a "/home" */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} /> 
            <Route path="/delete" element={<DeletePage />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/event-details" element={<EventDetails />} /> {/* Nueva ruta */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
