import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const ShimmerLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="text-center">
        <CircularProgress color="secondary" />
        <p className="mt-4 text-white text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default ShimmerLoader;
