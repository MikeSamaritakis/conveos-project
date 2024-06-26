import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './DetailsPage.css'

function DetailsPage() {
  const [imdbmovie, setImdbMovie] = useState(); // State to store the movie details

  const fetchMovie = async (imdbID) => {
    try {
      const imdbresponse = await fetch(`https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${imdbID}`, {
        method: 'GET',
        headers: {
                'Content-Type': 'application/json',
                // 'x-rapidapi-key': 'KEY_HERE',
                // 'x-rapidapi-host': 'imdb188.p.rapidapi.com'            
        }
      });
  
      if (!imdbresponse.ok) {
        throw new Error(`HTTP error! status: ${imdbresponse.status}`);
      }
  
      const imdbmovie = await imdbresponse.json();
      setImdbMovie(imdbmovie); // Store the fetched movie details
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  };

  // navigate('/search-results', { state: { imdbdata } });
  //return <div>{imdbdata.data[0].title}</div>;
  
  
  const location = useLocation();
  const movie = location.state.movie; // Retrieve the variable passed via navigate

  //console.log(movie.imdbID);

  console.log(movie.imdbID);

  fetchMovie(movie.imdbID);

  console.log(imdbmovie);

  if (!imdbmovie) {
    return <div>Loading...</div>; // Render a loading message if the movie or its title is not defined
  }

  return <div>{imdbmovie.data[0].title}
  id{imdbmovie.data[0].id}
  year{imdbmovie.data[0].year}
  stars{imdbmovie.data[0].stars}
  image{imdbmovie.data[0].image}
  </div>;
}

export default DetailsPage;

