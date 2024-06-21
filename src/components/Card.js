import React from 'react';

function Card({ movie }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{movie.Title} (Released: {movie.Year})</h3>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '100px', height: '150px' }} />
      <p>Type: {movie.Type}</p>
    </div>
  );
}

export default Card;
