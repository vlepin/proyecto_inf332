import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/layout';
import { AuthProvider } from './contexts/AuthContext'; // Asegúrate de ajustar la ruta
import './stylesheets/index.scss';

document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <Layout />
  </AuthProvider>
);
