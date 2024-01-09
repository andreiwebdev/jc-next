"use client";

import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ initialRating, onRatingSubmit, initialVotes }: any) => {
  const [rating, setRating] = useState(initialRating);
  const [votes, setVotes] = useState(initialVotes);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setRating(Math.round(initialRating));
  }, [initialRating]);

  useEffect(() => {
    setVotes(initialVotes);
  }, [initialVotes]);

  const handleRating = (newRating: any) => {
    setRating(newRating);
    setVotes(votes + 1);
    onRatingSubmit(newRating);
  };

  return (
    <div>
      <div className="flex justify-end gap-2 mb-2">
        {[1, 2, 3, 4, 5].map((star: any, index: any) => (
          <button
            key={star}
            className="focus:outline-none bg-transparent p-0"
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(null)}
          >
            <FaStar
              className={
                (hover || rating) >= star
                  ? "w-4 text-yellow-500"
                  : "w-4 text-gray-300"
              }
              size="20px"
            />
          </button>
        ))}
      </div>
      <div className="votes text-right">
        {rating}/5 - {votes} vote{votes !== 1 ? "s" : ""}
      </div>
    </div>
  );
};

export default StarRating;
