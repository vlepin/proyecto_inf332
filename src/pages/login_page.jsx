import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/layout/login.scss';

const LogInPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    onLogin();  // Cambia el estado de isLoggedIn a true

    // Redirige a la página de inicio
    navigate('/home'); // Cambia '/home' por la ruta que desees redirigir
  };

  return (
    <div className="login-page">
      <h2>Iniciar Sesión</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button type="submit" className="login-button">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LogInPage;
