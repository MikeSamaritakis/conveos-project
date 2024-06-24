import React from 'react';
import { useLocation } from 'react-router-dom';
import './DetailsPage.css'

function DetailsPage() {
  const location = useLocation();
  const movie = location.state.movie; // Retrieve the movie data passed via navigate

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Type:</strong> {movie.Type}</p>
      <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
      <p>{movie.DetailsPage}</p>
      <p>{movie.fullPlot}</p> 
    </div>
  );
}

export default DetailsPage;
