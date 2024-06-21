// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/search-results" element={<DetailsPage />} />
        </Routes>
      </div>
  );
}

export default App;
