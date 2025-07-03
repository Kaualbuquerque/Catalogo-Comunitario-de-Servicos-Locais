import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      {/* Definição das rotas */}
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
