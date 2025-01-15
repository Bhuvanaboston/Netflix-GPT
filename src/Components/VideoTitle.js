import React from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute bg-gradient-to-r  from-black text-white w-screen aspect-video">
      <h1 className="text-6xl  font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <Button
          variant="contained"
          startIcon={<PlayArrowIcon />}
          className=" !ml-16 !my-10"
          sx={{
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid #ccc', // Light gray border for visibility
            '&:hover': {
              backgroundColor: '#f5f5f5', // Light gray background on hover
              border: '1px solid #888', // Darker border on hover
            },
          }}
        >
          Play
        </Button>
        <Button
          variant="contained"
          startIcon={<InfoIcon />}
          sx={{
            backgroundColor: '#333333', // Charcoal gray color
            color: 'white',
            '&:hover': {
              backgroundColor: '#222222', // Darker shade on hover (black-ish)
            },
          }}
          className="!ml-5"
        >
          More Info
        </Button>
      </div>
    </div>
  );
};

export default VideoTitle;
