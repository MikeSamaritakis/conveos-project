import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card'; // Assuming each item is rendered as a Card
import './SearchPage.css';

function SearchPage() {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]); // State to store the list of movies
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!input) {
      alert("Please enter a valid title.");
      return;
    }

    const encodedInput = encodeURIComponent(input);
    const url = `https://movie-database-alternative.p.rapidapi.com/?s=${encodedInput}&r=json&page=1`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'x-rapidapi-key': 'KEY_HERE', 
        // 'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data.Search); // Store the fetched movies

      if (response === 'False') {
        alert("No results found. Please try again.");
      }

    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };  

  const handleNavigate = (movie) => {
    navigate('/search-results', { state: { movie } });
  };

  return (
    <form onSubmit={handleSearch}>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter title here..."
        />
        <button type="submit">Search</button>
      </div>
      <div>
        {movies.map(movie => (
          <div key={movie.imdbID} onClick={() => handleNavigate(movie)} style={{ cursor: 'pointer' }}>
            <Card movie={movie} />          
          </div>
        ))}
      </div>
    </form>
  );
}

export default SearchPage;
