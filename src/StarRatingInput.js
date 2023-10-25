import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './StarRatingInput.css';

function StarRatingInput({ value, onChange }) {
    const [rating, setRating] = useState(value);

    useEffect(() => {
      setRating(value);
    }, [value]);
  
    const handleStarClick = (clickedRating) => {
      setRating(clickedRating);
      onChange(clickedRating);
    };
  
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={faStar}
            className={`star ${star <= rating ? 'checked' : ''}`}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>
    );

}

export default StarRatingInput;
