import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './register_page';
import DeletePage from './delete_page';
import EditPage from './edit_page';
import NavBar from '../components/nav_bar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/delete" element={<DeletePage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </Router>
  );
}


export default App;
