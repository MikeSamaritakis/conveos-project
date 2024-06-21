// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// function DetailsPage() {
//   const location = useLocation();
//   const { weather } = location.state;
//   const { actualId } = useParams();
//   <Link to={`/details/${actualId}`}>Go to details</Link>

//   return (
//     <div>
//       <h1>Weather Details</h1>
//       {weather && (
//         <div>
//           <p>Location: {weather.location.name}</p>
//           <p>Temperature: {weather.temperature}</p>
//           <p>Conditions: {weather.conditions}</p>
//           {/* Display other weather details as needed */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default DetailsPage;

import React from 'react';
import { useLocation } from 'react-router-dom';

function DetailsPage() {
  const location = useLocation();
  console.log(location.state.query);  // Check what's being passed

  const query = location.state ? location.state.query : 'No input provided';

  return (
    <div>
      <h1>Search Result</h1>
      <p>You searched for: {query}</p>
    </div>
  );
}

export default DetailsPage;
