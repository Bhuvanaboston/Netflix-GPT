import React from 'react';
import { IMAGE_BASE_URL } from '../Utils/Constants';

const MovieCard = ({ movie }) => {
  return (
    <div className="w-36  m-5">
      <img
        src={IMAGE_BASE_URL + movie?.poster_path}
        alt={movie.original_title}
      />
    </div>
  );
};

export default MovieCard;
