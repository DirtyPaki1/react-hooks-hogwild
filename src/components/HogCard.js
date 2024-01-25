// components/HogCard.js
import React, { useState } from 'react';

function HogCard({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleHide = () => {
    hideHog(hog.name);
  };

  return (
    <div className="hog-card">
      <div className="hog-card-main">
        <h2>{hog.name}</h2>
        <img src={hog.image} alt={hog.name} />
        <button onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
        <button onClick={handleHide}>Hide Hog</button>
      </div>
      {showDetails && (
        <div className="hog-card-details">
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
          <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
        </div>
      )}
    </div>
  );
}

export default HogCard;