import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home_page';
import RegisterPage from '../pages/register_page'; 
import DeletePage from '../pages/delete_page'; 
import EditPage from '../pages/edit_page'; 
import NavBar from '../components/nav_bar';

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'> 
        <h1 className='layout__title'>Relaciones Estudiantiles</h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} /> 
            <Route path='/delete' element={<DeletePage />} />
            <Route path='/edit' element={<EditPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
