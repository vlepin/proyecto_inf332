import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

import Home from '../pages/home';
import RegisterPage from '../pages/register_page';
import DeletePage from '../pages/delete_page';
import EditPage from '../pages/edit_page';
import EventDetails from '../pages/EventDetails';
import HomePageAll from '../pages/home_page';
import ContactPage from '../pages/contact_page';
import LogInPage from '../pages/login_page';
import NavBar from '../components/nav_bar';
import logo from '../assets/rree.png';
import RequestsPage from '../pages/RequestPage';
import RequestDetailPage from '../pages/DetailRequest';

const Layout = () => {
  // Estado para controlar si el usuario ha iniciado sesión
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="layout">
        <Link to="/home">
          <img src={logo} alt="Logo de Relaciones Estudiantiles" className="layout__logo" />
        </Link>

        {/* Mostrar NavBar si el usuario ha iniciado sesión, de lo contrario mostrar botones de búsqueda y sesión */}
        {isLoggedIn ? (
          <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        ) : (
          <div className="header-bar">
            <input type="text" placeholder="Buscar..." className="search-bar" />
            <Link to="/contact">
              <button className="contact-button">Formulario de eventos</button>
            </Link>
            <Link to="/login">
              <button className="login-button">Iniciar sesión</button>
            </Link>
          </div>
        )}

        <div className="layout__page">
          <Routes>
            {/* Ruta de inicio por defecto */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/event-details" element={<EventDetails />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LogInPage onLogin={() => setIsLoggedIn(true)} />} />

            {/* Rutas accesibles solo después de iniciar sesión */}
            {isLoggedIn ? (
              <>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/delete" element={<DeletePage />} />
                <Route path="/requests" element={<RequestsPage />} />
                <Route path="/request-detail" element={<RequestDetailPage />} />
                <Route path="/edit" element={<EditPage />} />
              </>
            ) : (
              // Si no está logueado, redirige a HomePageAll para cualquier ruta no permitida
              <Route path="*" element={<HomePageAll />} />
            )}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
