// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { Link } from 'react-router-dom';

// // // function SearchPage() {
// // //     const [location, setLocation] = useState('');
// // //     const [loading, setLoading] = useState(false);
// // //     const [error, setError] = useState(null);

// // //     const navigate = useNavigate();

// // //     const handleFetchWeather = async () => {
// // //         if (!location) {
// // //             alert("Please enter a location.");
// // //             return;
// // //         }
        
// // //         setLoading(true);
// // //         setError(null);
// // //         const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${encodeURIComponent(location)}&format=json&u=c`;
// // //         const options = {
// // //             method: 'GET',
// // //             headers: {
// // //                 'Content-Type': 'application/json',
// // //                 'x-rapidapi-key': '5c03c687c7msh4b22b197f5a764ep1a6953jsnda62c876fafc',
// // //                 'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
// // //             }
// // //         };

// // //         try {
// // //             const response = await fetch(url, options);
// // //             if (!response.ok) {
// // //                 throw new Error(`HTTP error! Status: ${response.status}`);
// // //             }
// // //             const result = await response.json();
// // //             navigate('/details/:id', { state: { weather: result } });
// // //         } catch (error) {
// // //             console.error('Failed to fetch:', error);
// // //             setError('Failed to fetch weather data. ' + error.message);
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <input
// // //                 type="text"
// // //                 value={location}
// // //                 onChange={e => setLocation(e.target.value)}
// // //                 placeholder="Enter location"
// // //             />
// // //             <button onClick={handleFetchWeather}>Get Weather</button>
// // //             {loading && <p>Loading...</p>}
// // //             {error && <p>Error: {error}</p>}
// // //             {/* Display weather data as needed */}
// // //             <Link to={`/details/${location}`}>Go to details</Link>
// // //         </div>
// // //     );
// // // }

// // // export default SearchPage;

// // import React from 'react';

// // function SearchPage() {
// //   return (
// //     <div>
// //       <h1>Welcome to the Search Page</h1>
// //       <p>This is the home page of your application.</p>
// //     </div>
// //   );
// // }

// // export default SearchPage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function SearchPage() {
//     const [location, setLocation] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleFetchWeather = async () => {
//         if (!location) {
//             alert("Please enter a location.");
//             return;
//         }
        
//         setLoading(true);
//         setError(null);
//         const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${encodeURIComponent(location)}&format=json&u=c`;
//         const options = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-rapidapi-key': '5c03c687c7msh4b22b197f5a764ep1a6953jsnda62c876fafc',
//                 'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
//             }
//         };

//         try {
//             const response = await fetch(url, options);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const result = await response.json();
//             navigate('/details', { state: { weather: result } });
//         } catch (error) {
//             console.error('Failed to fetch:', error);
//             setError('Failed to fetch weather data. ' + error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={location}
//                 onChange={e => setLocation(e.target.value)}
//                 placeholder="Enter location..."
//             />
//             <button onClick={handleFetchWeather}>Get Weather</button>
//             {loading && <p>Loading...</p>}
//             {error && <p>Error: {error}</p>}
//         </div>
        
//     );
// }

// export default SearchPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

    const handleSearch = async () => {
        if (!input) {
            alert("Please enter a valid location.");
            return;
        }
        else{
            navigate('/search-results', { state: { query: input } });
        }
    }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter location here..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchPage;
