import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home.tsx';
import { Survey } from './components/Survey.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/survey" element={<Survey />} />
    </Routes>
  );
}

export default App;
