import React from 'react';
import MovieCard from './MovieCard';
import { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const MovieList = ({ title, movies }) => {
  // console.log('MovieList', JSON.stringify(movies));
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  return (
    <div className="p-6 text-white font-bold">
      <h1 className="text-lg md:text-xl">{title}</h1>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 z-10"
        >
          <ArrowBackIosIcon fontSize="large" />
        </button>
        <div
          className="flex overflow-x-scroll scroll-smooth"
          ref={scrollRef}
          style={{
            scrollbarWidth: 'none' /* For Firefox */,
            msOverflowStyle: 'none' /* For IE and Edge */,
          }}
        >
          <div className="flex gap-4">
            {movies?.map((movie) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 z-10"
        >
          <ArrowForwardIosIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
