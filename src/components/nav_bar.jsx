import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']; 
    if (isActive) classes.push('nav-bar__link--active');
    return classes.join(' ');
  };

  return (
    <nav className='nav-bar'>
      <NavLink className={navLinkClass} to='/home'>Eventos</NavLink>
      <NavLink className={navLinkClass} to='/register'>Registrar</NavLink>
      <NavLink className={navLinkClass} to='/delete'>Eliminar</NavLink>
      <NavLink className={navLinkClass} to='/edit'>Editar</NavLink>
      <NavLink className={navLinkClass} to='/requests'>Solicitudes</NavLink> {/* Cambiado de Editar a Solicitudes */}
    </nav>
  );
};

export default NavBar;
