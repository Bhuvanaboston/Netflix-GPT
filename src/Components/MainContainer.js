import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Left arrow
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Right arrow

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [activeIndex, setActiveIndex] = useState(0); // State to track the current video index

  if (!movies || movies.length === 0) return null;

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentMovie = movies[activeIndex];

  return (
    <div className="relative w-screen h-screen">
      {/* Video Title */}
      <VideoTitle
        title={currentMovie.original_title}
        overview={currentMovie.overview}
      />

      {/* Video Background */}
      {/* Pass a unique key to force re-render */}
      <VideoBackground key={currentMovie.id} movieId={currentMovie.id} />

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <IconButton
          onClick={handlePrevious}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
        >
          <ArrowBackIcon />
        </IconButton>
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <IconButton
          onClick={handleNext}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default MainContainer;
