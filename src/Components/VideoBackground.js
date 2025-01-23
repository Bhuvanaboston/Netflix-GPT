import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useGetMovieTrailer from '../Hooks/useGetMovieTrailer';
import VolumeUpIcon from '@mui/icons-material/VolumeUp'; // Import a volume icon
import VolumeOffIcon from '@mui/icons-material/VolumeOff'; // Import a mute icon
import IconButton from '@mui/material/IconButton';

const VideoBackground = ({ movieId }) => {
  const [isMuted, setIsMuted] = useState(true); // State for mute/unmute

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useGetMovieTrailer(movieId);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${
          trailerVideo?.key
        }?autoplay=1&mute=${isMuted ? 1 : 0}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      {/* Mute/Unmute Button */}
      <div className="absolute bottom-30 md:bottom-20 md:right-10 ">
        <IconButton
          onClick={toggleMute}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
        >
          {isMuted ? (
            <VolumeOffIcon fontSize="large" />
          ) : (
            <VolumeUpIcon fontSize="large" />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default VideoBackground;
