import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import GptSearchPage from './GptSearchPage';
const Body = () => {
  const appRouter = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/browse', element: <Browse /> },
    { path: '/gptsearch', element: <GptSearchPage /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
