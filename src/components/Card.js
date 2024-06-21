// src/components/Card.js
import React from 'react';

function Card({ movie }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>{movie.Title} ({movie.Year})</h3>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '100px', height: '150px' }} />
      <p>{movie.Type}</p>
    </div>
  );
}

export default Card;
