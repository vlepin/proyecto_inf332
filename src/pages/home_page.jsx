import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './register_page';
import DeletePage from './delete_page';
import EditPage from './edit_page';
import NavBar from '../components/nav_bar';
import Home from './home'; // Importa el componente Home

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Redirección automática de la raíz "/" a "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />
        
        {/* Otras rutas */}
        <Route path="/home" element={<Home />} /> {/* Usa el componente Home */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/delete" element={<DeletePage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </Router>
  );
}

export default App;
