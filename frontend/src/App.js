import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import KitchenCalculatorPage from './pages/KitchenCalculatorPage';
import WardrobeCalculatorPage from './pages/WardrobeCalculatorPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/calculator/kitchen" element={<KitchenCalculatorPage />} />
        <Route path="/calculator/wardrobe" element={<WardrobeCalculatorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
