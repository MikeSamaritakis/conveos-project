// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/search-results" element={<DetailsPage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
