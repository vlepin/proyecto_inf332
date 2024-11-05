import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import RegisterPage from './register_page';
import DeletePage from './delete_page';
import EditPage from './edit_page';
import Home from './home'; 
import ContactPage from './contact_page'; // Importa ContactPage
import LogInPage from './login_page'; // Importa LogInPage
import '../stylesheets/layout/home_page_all.scss';

function App() {
  return (
    <Router>
      <div className="header-bar">
        <input type="text" placeholder="Buscar..." className="search-bar" />
        <button className="filter-button" onClick={() => console.log('Filtrar')}>
          Filtrar
        </button>
        <HeaderButtons /> {/* Componentiza los botones de la barra superior */}
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/delete" element={<DeletePage />} />
        <Route path="/contact" element={<ContactPage />} /> {/* Ruta de ContactPage */}
        <Route path="/login" element={<LogInPage />} /> {/* Ruta de LogInPage */}
      </Routes>
    </Router>
  );
}

function HeaderButtons() {
  const navigate = useNavigate();

  return (
    <>
      <button className="contact-button" onClick={() => navigate('/contact')}>
        Formulario para eventos
      </button>
      <button className="login-button" onClick={() => navigate('/login')}>
        Iniciar sesión
      </button>
    </>
  );
}

export default App;