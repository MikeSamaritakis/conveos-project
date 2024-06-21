import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card'; // Make sure to import the Card component

function SearchPage() {
    const [input, setInput] = useState('');
    const [movies, setMovies] = useState([]);  // State to store the list of movies
    const navigate = useNavigate();

    const handleSearch = async (event) => {
        event.preventDefault();
        if (!input) {
            alert("Please enter a valid movie title.");
            return;
        }

        const encodedInput = encodeURIComponent(input);
        const url = `https://movie-database-alternative.p.rapidapi.com/?s=${encodedInput}&r=json&page=1`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-key': '5c03c687c7msh4b22b197f5a764ep1a6953jsnda62c876fafc',
                'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setMovies(data.Search);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter movie title here..."
                />
                <button type="submit">Search</button>
            </div>
            <div>
                {movies.map(movie => (
                    <Card key={movie.imdbID} movie={movie} />  // Use Card component for each movie
                ))}
            </div>
        </form>
    );
}

export default SearchPage;
