import React from 'react';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

const StarRating = ({ rating_star }) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5;
    return (
      <span key={idx}>
        {
          rating_star >= idx + 1 ? (<BsStarFill className="text-yellow-500" />) : rating_star >= val ? (<BsStarHalf className="text-yellow-500" />) : (<BsStar className="text-yellow-500" />)
        }
      </span>
    )
  })

  return (
    <div className="flex items-center">
      {stars}
    </div>
  )
}

export default StarRating;
